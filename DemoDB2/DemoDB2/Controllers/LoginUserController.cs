using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using DemoDB2.Models;
namespace DemoDB2.Controllers
{
    public class LoginUserController : Controller
    {
        DBSportStoreEntities1 db = new DBSportStoreEntities1();
        // GET: LoginUser
        // Phương thức tạo view cho Login
        public ActionResult Index()
        {
            return View();
        }
        // Xử lý tìm kiếm ID, password trong AdminUser và thông báo
        [HttpPost]
        public ActionResult LoginAcount(AdminUser _user)
        {
            var check = db.AdminUsers.
                Where(s => s.NameUser == _user.NameUser && s.PasswordUser == _user.PasswordUser).FirstOrDefault();
            if (check == null)
            {
                ViewBag.ErrorInfo = "Sai Info";
                return View("Index");
            }
            else
            {
                db.Configuration.ValidateOnSaveEnabled = false;
                Session["ID"] = _user.ID;
                Session["NameUser"] = _user.NameUser;
                Session["PasswodUser"] = _user.PasswordUser;
                Session["RoleUser"] = _user.RoleUser;
                Session["chon"] = _user.RoleUser;
                string chon = _user.RoleUser;
                //var ch = Session["chon"];
                //return RedirectToAction("ProductList", "Products");
                if (chon.ToString() == "admin")
                    return RedirectToAction("Index", "AdminUsers");
                else
                    return RedirectToAction("IndexStart", "Home");
            }
        }
        // Regíter
        [HttpGet]
        public ActionResult RegisterUser()
        {
            return View();
        }
        [HttpPost]
        public ActionResult RegisterUser(AdminUser _user)
        {
            if (ModelState.IsValid)
            {
                db.Configuration.ValidateOnSaveEnabled = false;
                db.AdminUsers.Add(_user);
                db.SaveChanges();
            }
            else
            {
                ViewBag.ErrorRegister = "ID này đã có rồi !!!";
            }
            return View();
        }
        [ChildActionOnly]
        public PartialViewResult menuPartial()
        {
            return PartialView();
        }
        public ActionResult LogOutUser()
        {
            Session.Abandon();
            return RedirectToAction("Index", "LoginUser");
        }
    }
}