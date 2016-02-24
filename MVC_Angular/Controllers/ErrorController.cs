using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVC_Angular.Controllers
{
    public class ErrorController : Controller
    {
        // GET: Error
        public ActionResult Error(string param)
        {
            //ViewBag.Error = param;
            return View();
        }
    }
}