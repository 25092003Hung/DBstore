using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using DemoDB2.Models;
using PagedList;
using System.IO;

namespace DemoDB2.Controllers
{
    public class ProductsController : Controller
    {
        private DBSportStoreEntities1 db = new DBSportStoreEntities1();

        // GET: Products
        public ActionResult Index(string category)
        {
            var products = db.Products.Include(p => p.Category1);
            return View(products.ToList());

        }

        // GET: Products/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Product product = db.Products.Find(id);
            if (product == null)
            {
                return HttpNotFound();
            }
            return View(product);
        }

        // GET: Products/Create
        public ActionResult Create()
        {
            Product pro = new Product();
            return View(pro);
        }

        // POST: Products/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(Product item, HttpPostedFileBase UploadImage)
        {
            try
            {
                if (UploadImage != null)
                {
                    //string filename = Path.GetFileNameWithoutExtension(item.UploadImage.FileName);
                    //string extent = Path.GetExtension(item.UploadImage.FileName);
                    //filename = filename + extent;
                    //item.ImagePro = "~/img/" + filename;
                    //item.UploadImage.SaveAs(Path.Combine(Server.MapPath("~/img/"), filename));
                    var filename = Path.GetFileName(UploadImage.FileName);
                    var path = Path.Combine(Server.MapPath("/img"), filename);//img/filename 
                    item.ImagePro = filename;
                    UploadImage.SaveAs(path);
                }
                db.Products.Add(item);
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Products/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Product product = db.Products.Find(id);
            if (product == null)
            {
                return HttpNotFound();
            }
            ViewBag.Category = new SelectList(db.Categories, "IDCate", "NameCate", product.Category);
            return View(product);
        }

        // POST: Products/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "ProductID,NamePro,DecriptionPro,Category,Price,ImagePro")] Product product, HttpPostedFileBase UploadImage)
        {
            var productDB = db.Products.Where(s => s.ProductID == product.ProductID).FirstOrDefault();
            productDB.NamePro = product.NamePro;
            productDB.OrderDetails = product.OrderDetails;
            productDB.Price = product.Price;
            productDB.ProductID = product.ProductID;


            if (UploadImage != null)
            {
                var filename = Path.GetFileName(UploadImage.FileName);
                var path = Path.Combine(Server.MapPath("/img"), filename);
                productDB.ImagePro = filename;
                UploadImage.SaveAs(path);
            }
            //db.Entry(product).State = EntityState.Modified;
            db.SaveChanges();
            return RedirectToAction("Index");

            //ViewBag.Category = new SelectList(db.Categories, "IDCate", "NameCate", product.Category);
        }

        // GET: Products/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Product product = db.Products.Find(id);
            if (product == null)
            {
                return HttpNotFound();
            }
            return View(product);
        }

        // POST: Products/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Product product = db.Products.Find(id);
            db.Products.Remove(product);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        public ActionResult ProductList(string category, int? page, string SearchString, double min = double.MinValue, double max = double.MaxValue)
        {
            var products = db.Products.Include(p => p.Category1);
            var cate = db.Categories.Include(p => p.IDCate);
            if (category != null)
            {
                Session["cate"] = category;
            }

            if (category == null)
            {
                products = db.Products.OrderByDescending(x => x.NamePro);
            }
            else
            {
                products = db.Products.OrderByDescending(x => x.Category).Where(x => x.Category == category);
            }
            if (!String.IsNullOrEmpty(SearchString))
            {
                products = db.Products.OrderByDescending(x => x.ProductID).Where(s => s.NamePro.Contains(SearchString.Trim()));
            }
            if (min >= 0 && max > 0)
            {
                products = db.Products.OrderByDescending(x => x.Price).Where(p => (double)p.Price >= min && (double)p.Price <= max);
            }

            // Khai báo mỗi trang 4 sản phẩm
            int pageSize = 4;
            // Toán tử ?? trong C# mô tả nếu page khác null thì lấy giá trị page, còn
            // nếu page = null thì lấy giá trị 1 cho biến pageNumber.
            int pageNumber = (page ?? 1);
            //Nếu page = null thì đặt lại page là 1.
            if (page == null) page = 1;
            // Trả về các product được phân trang theo kích thước và số trang.
            return View(products.ToPagedList(pageNumber, pageSize));
        }
        public ActionResult SelectCate()
        {
            Category listItem = new Category();
            listItem.ListCate = db.Categories.ToList<Category>();
            return PartialView(listItem);
        }

    }
}
