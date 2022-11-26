using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DemoDB2.Models
{
    public class Customers
    {
        DBSportStoreEntities1 db = new DBSportStoreEntities1();

        public bool CheckUserName(string userName)
        {
            return db.Customers.Count(p => p.UserName == userName) > 0;
        }
        public bool CheckEmail(string email)
        {
            return db.Customers.Count(p => p.EmailCus == email) > 0;
        }
    }
}