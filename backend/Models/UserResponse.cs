using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class UserResponse
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public bool? IsAdmin { get; set; }
    }
}
