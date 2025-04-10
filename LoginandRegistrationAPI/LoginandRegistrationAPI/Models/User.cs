
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace LoginandRegistrationAPI.Models
{


    public class User
    {
        public int UserId { get; set; }        // Primary Key
        public string FirstName { get; set; }  // User's First Name
        public string LastName { get; set; }   // User's Last Name
        public string Email { get; set; }      // User's Email
        public string PasswordHash { get; set; } // Hashed Password
        public string PasswordSalt { get; set; } // Salt for Hashing
        public DateTime CreatedAt { get; set; }  // Account Creation Date

        public ICollection<UserRole> UserRoles { get; set; }  // User can have many roles
    }

}
