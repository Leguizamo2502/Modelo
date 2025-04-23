﻿using Data.Interfaces;
using Data.Repository;
using Entity.Context;
using Entity.Model;
using Microsoft.EntityFrameworkCore;

namespace Data.Services
{
    public class RolFormPermissionRepository : DataGeneric<RolFormPermission>, IRolFormPermissionRepository
    {
        public RolFormPermissionRepository(ApplicationDbContext context) : base(context) { }
        public async Task<IEnumerable<RolFormPermission>> GetAllJoinAsync()
        {
            return await _dbSet
                .Include(u => u.rol)
                .Include(u => u.form)
                .Include(u => u.permission)
                .Where(u => !u.is_deleted)
                .ToListAsync();
        }

        public async Task<RolFormPermission?> GetByIdJoinAsync(int id)
        {
            return await _dbSet
                .Include(u => u.rol)
                .Include(u => u.form)
                .Include(u => u.permission)
                .Where(u => !u.is_deleted && u.id == id)
                .FirstOrDefaultAsync();
        }
    }
}
