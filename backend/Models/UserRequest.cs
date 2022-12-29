using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class UserRequest
    {
        [Required]
        public string Usuario { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        public bool IsAdmin { get; set; }
    }
}
