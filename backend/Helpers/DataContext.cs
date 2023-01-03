using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using backend.Models;
using backend.Entities;

#nullable disable

namespace backend.Helpers
{
    public partial class DataContext : DbContext
    {
        public DataContext()
        {
        }

        public DataContext(DbContextOptions<DataContext> options)
            : base(options)
        {
        }

        public virtual DbSet<RefreshToken> RefreshTokens { get; set; }
        public virtual DbSet<User> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=localhost;Database=metronic;Initial Catalog=metronic;User ID=luciano; password=admin");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<RefreshToken>(entity =>
            {
                entity.ToTable("refreshToken");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Created)
                    .HasColumnType("datetime")
                    .HasColumnName("created");

                entity.Property(e => e.CreatedByIp)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("createdByIp");

                entity.Property(e => e.Expires)
                    .HasColumnType("datetime")
                    .HasColumnName("expires");

                entity.Property(e => e.ReplacedByToken)
                    .HasMaxLength(4000)
                    .IsUnicode(false)
                    .HasColumnName("replacedByToken");

                entity.Property(e => e.Revoked)
                    .HasColumnType("datetime")
                    .HasColumnName("revoked");

                entity.Property(e => e.RevokedByIp)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("revokedByIp");

                entity.Property(e => e.Token)
                    .HasMaxLength(4000)
                    .IsUnicode(false)
                    .HasColumnName("token");

                entity.Property(e => e.UserId).HasColumnName("userId");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.RefreshTokens)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK_refreshToken_user");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("user");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.IsAdmin).HasColumnName("isAdmin");

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .IsUnicode(false);
                
                entity.Property(e => e.Password)
                    .HasMaxLength(200)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
