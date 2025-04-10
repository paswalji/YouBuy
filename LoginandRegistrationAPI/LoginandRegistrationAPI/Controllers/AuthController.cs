
using LoginandRegistrationAPI.Data;
using LoginandRegistrationAPI.DTOs;
using LoginandRegistrationAPI.Models;
using LoginandRegistrationAPI.Utilities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System.Text;

namespace LoginandRegistrationAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly JwtUtils _jwtUtils;

        public AuthController(AppDbContext context, JwtUtils jwtUtils)  // Inject JwtUtils here
        {
            _context = context;
            _jwtUtils = jwtUtils;
        }

        // POST: api/auth/register
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterRequest model)
        {
            if (ModelState.IsValid)
            {
                // Check if user already exists
                if (await _context.Users.AnyAsync(u => u.Email == model.Email))
                {
                    return BadRequest("Email is already taken.");
                }

                // Hash password
                var salt = GenerateSalt();
                var passwordHash = HashPassword(model.Password, salt);

                // Create User object
                var user = new User
                {
                    FirstName = model.FirstName,
                    LastName = model.LastName,
                    Email = model.Email,
                    PasswordHash = passwordHash,
                    PasswordSalt = salt,
                    CreatedAt = DateTime.UtcNow
                };

                // Assign roles to the user
                foreach (var roleName in model.Roles)
                {
                    var role = await _context.Roles
                        .FirstOrDefaultAsync(r => r.RoleName == roleName);
                    if (role != null)
                    {
                        _context.UserRoles.Add(new UserRole
                        {
                            User = user,
                            Role = role
                        });
                    }
                }

                _context.Users.Add(user);
                await _context.SaveChangesAsync();

                return Ok("User registered successfully.");
            }

            return BadRequest(ModelState);
        }

        // POST: api/auth/login
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest model)
        {
            if (ModelState.IsValid)
            {
                var user = await _context.Users
                    .FirstOrDefaultAsync(u => u.Email == model.Email);

                if (user == null || !VerifyPassword(model.Password, user.PasswordHash, user.PasswordSalt))
                {
                    return Unauthorized("Invalid credentials.");
                }

                // Generate JWT Token
                var token = _jwtUtils.GenerateJwtToken(user);
                return Ok(new { Token = token });
            }

            return BadRequest(ModelState);
        }

        // Helper method to generate password hash with salt
        private string HashPassword(string password, string salt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512(Encoding.UTF8.GetBytes(salt)))
            {
                var hashBytes = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));
                return Convert.ToBase64String(hashBytes);
            }
        }

        // Helper method to verify password
        private bool VerifyPassword(string password, string storedHash, string storedSalt)
        {
            var computedHash = HashPassword(password, storedSalt);
            return computedHash == storedHash;
        }

        // Helper method to generate salt for password hashing
        private string GenerateSalt()
        {
            using (var rng = new System.Security.Cryptography.RNGCryptoServiceProvider())
            {
                var saltBytes = new byte[16];
                rng.GetBytes(saltBytes);
                return Convert.ToBase64String(saltBytes);
            }
        }
    }
}
