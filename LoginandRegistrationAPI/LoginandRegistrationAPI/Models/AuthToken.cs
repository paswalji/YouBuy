using LoginandRegistrationAPI.Models;

namespace LoginandRegistrationAPI.Models
{
    public class AuthToken
    {
        public int AuthTokenId { get; set; }  // Primary Key

        public string Token { get; set; }

        public int UserId { get; set; }  // Foreign Key to User
        public User User { get; set; }

        public DateTime Expiration { get; set; }  // Expiration time of the token
    }


}
