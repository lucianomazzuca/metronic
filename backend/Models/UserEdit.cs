using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class UserEdit
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public bool IsAdmin { get; set; }
    }
}
