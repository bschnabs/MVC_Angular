using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVC_Angular.Controllers
{
    public class RoutesDemoController : Controller
    {
        public ActionResult One()
        {
            return View();
        }

        public ActionResult Two(int mvcParam = 1)
        {
            ViewBag.Donuts = mvcParam;
            return View();
        }

        public ActionResult Three()
        {
            return View();
        }
    }
}