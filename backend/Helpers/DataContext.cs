using backend.Entities;
using Microsoft.EntityFrameworkCore;

namespace backend.Helpers
{
    public class DataContext : DbContext
    {
        public virtual DbSet<User> User { get; set; }
        public virtual DbSet<RefreshToken> RefreshTokens { get; set; }

        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");
        }
    }
}
