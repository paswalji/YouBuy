using System.ComponentModel.DataAnnotations;

namespace LoginandRegistrationAPI.DTOs
{
  

  
        public class RegisterDto
        {
            [Required]
            public string FirstName { get; set; }

            [Required]
            public string LastName { get; set; }

            [Required]
            [EmailAddress]
            public string Email { get; set; }

            [Required]
            [MinLength(6)]
            public string Password { get; set; }

            [Required]
            public List<string> Roles { get; set; } // List of roles to assign to the user
        }
}



