using System;
using System.Collections.Generic;

#nullable disable

namespace backend.Entities
{
    public partial class User
    {
        public User()
        {
            RefreshTokens = new HashSet<RefreshToken>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
        public bool? IsAdmin { get; set; }

        public virtual ICollection<RefreshToken> RefreshTokens { get; set; }
    }
}
