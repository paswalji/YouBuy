
using System;
using System.Collections.Generic;

namespace LoginandRegistrationAPI.Models
{

    public class Role
    {
        public int RoleId { get; set; }         // Primary Key
        public string RoleName { get; set; }    // Role Name (e.g., Admin, Customer)

        public ICollection<UserRole> UserRoles { get; set; } // Relationship with Users
    }


}
