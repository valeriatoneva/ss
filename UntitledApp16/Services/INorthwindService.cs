using UntitledApp16.Models.Northwind;

namespace UntitledApp16.Northwind
{
    public interface INorthwindService
    {
        Task<List<EmployeesType>> GetEmployees();
    }
}
