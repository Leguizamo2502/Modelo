﻿using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Data.Interfaces;
using Entity.Context;
using Entity.DTOs.Default;
using Entity.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace Business.Services
{
    public class AuthService
    {
        private readonly IData<User> _userData;
        private readonly IConfiguration _configuration;
        private readonly ApplicationDbContext _context;

        public AuthService(IData<User> userData, IConfiguration configuration, ApplicationDbContext context)
        {
            _userData = userData;
            _configuration = configuration;
            _context = context;
        }

        public async Task<ResponseDto> AuthenticateAsync(string username, string password)
        {
            var users = await _userData.GetAllAsync();
            var user = users.FirstOrDefault(u => u.user_name == username && u.active);

            if (user == null || user.password != password)
                throw new UnauthorizedAccessException("Credenciales inválidas");

            //// Obtener el rol (asegurándote que el rol está activo)
            //var userRole = user.rol_users?
            //         .FirstOrDefault(r => !r.is_deleted && r.rol != null && r.rol.active)?.rol?.name ?? "User";
            var userRole = await GetUserRole(user.id);


            var claims = new[]
            {
        new Claim(ClaimTypes.NameIdentifier, user.id.ToString()),
        new Claim(ClaimTypes.Name, user.user_name),
        new Claim("PersonId", user.person_id.ToString()),
        new Claim(ClaimTypes.Role,userRole),
        
        // Aquí se agrega el claim de rol con la URL de Microsoft
        new Claim("http://schemas.microsoft.com/ws/2008/06/identity/claims/role", userRole)
    };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JwtSettings:SecretKey"]!));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: _configuration["JwtSettings:Issuer"],
                audience: _configuration["JwtSettings:Audience"],
                claims: claims,
                expires: DateTime.Now.AddMinutes(Convert.ToDouble(_configuration["JwtSettings:ExpireMinutes"])),
                signingCredentials: creds
            );

            return new ResponseDto
            {
                Token = new JwtSecurityTokenHandler().WriteToken(token),
                UserName = user.user_name,
                Role = userRole,
                UserId = user.id
            };
        }

        public async Task<string> GetUserRole(int userId)
        {
            var roles = await _context.rol_user
            .Where(ru => ru.userid == userId)
               .Join(_context.rol,
                   rolUser => rolUser.rolid,
                   rol => rol.id,
                   (rolUser, rol) => rol.name)
               .ToListAsync();

            if (!roles.Any())
            {
                return "Sin roles asignados";
            }

            return string.Join(", ", roles);
        }

    }
}
