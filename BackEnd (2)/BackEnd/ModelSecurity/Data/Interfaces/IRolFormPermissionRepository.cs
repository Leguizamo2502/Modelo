using Entity.Model;

namespace Data.Interfaces
{
    public interface IRolFormPermissionRepository : IData<RolFormPermission>
    {
        Task<IEnumerable<RolFormPermission>> GetAllJoinAsync();
        Task<IEnumerable<RolFormPermission>> GetAllDeletesJoinAsync();
        Task<RolFormPermission?> GetByIdJoinAsync(int id);
    }
}
