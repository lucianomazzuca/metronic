using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace backend.Entities
{
    public class User
    {
        public int Id { get; set; }
        public string Usuario { get; set; }
        public string Dominio { get; set; }
        public bool IsAdmin { get; set; }
        public int? BusinessUnitCode { get; set; }

        [JsonIgnore]
        public List<RefreshToken> RefreshTokens { get; set; }
    }
}
