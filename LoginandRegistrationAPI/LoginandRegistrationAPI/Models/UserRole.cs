using LoginandRegistrationAPI.Models;

namespace LoginandRegistrationAPI.Models
{
    public class UserRole
    {
        public int UserId { get; set; }   // Foreign Key to User
        public User User { get; set; }

        public int RoleId { get; set; }   // Foreign Key to Role
        public Role Role { get; set; }
    }

}
