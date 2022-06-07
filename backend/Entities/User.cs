using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace backend.Entities
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Domain { get; set; }
        public bool IsAdmin { get; set; }

        [JsonIgnore]
        public List<RefreshToken> RefreshTokens { get; set; }
    }
}
