using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class UserRequest
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string Domain { get; set; }
        [Required]
        public bool isAdmin { get; set; }
    }
}
