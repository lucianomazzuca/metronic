using backend.Entities;
using backend.Helpers;
using backend.Models;
using Microsoft.AspNetCore.Authentication;
using Microsoft.Extensions.Options;
using System.Collections;
using System.Collections.Generic;
using System.DirectoryServices.AccountManagement;

namespace backend.Services
{
    public interface IUserService
    {
        AuthenticateResponse Authenticate(AuthenticateRequest model, string ipAddress);
        AuthenticateResponse RefreshToken(string token, string ipAddress);
        bool RevokeToken(string token, string ipAddress);
        IEnumerable<User> GetAll();
        User GetById(int id);
        User Create(UserRequest user);
        int Update(int id, UserRequest user);
    }

    public class UserService
    {
        private DataContext _context;
        private readonly AppSettings _appSettings;

        public UserService(DataContext context, IOptions<AppSettings> appSettings)
        {
            _context = context;
            _appSettings = appSettings.Value;
        }

        public AuthenticateResponse Authenticate(AuthenticateRequest model, string ipAddress)
        {
            using(PrincipalContext pc = new PrincipalContext(ContextType.Domain))
            {
                bool isValid = pc.ValidateCredentials(model.Username, model.Password, ContextOptions.Negotiate);
            }
        }

    }

}
