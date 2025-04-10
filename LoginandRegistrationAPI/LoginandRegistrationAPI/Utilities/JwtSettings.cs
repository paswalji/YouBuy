namespace LoginandRegistrationAPI.Utilities
{
    public class JwtSettings
    {
        public string SecretKey { get; set; }
        public int ExpirationInMinutes { get; set; }
    }
}
