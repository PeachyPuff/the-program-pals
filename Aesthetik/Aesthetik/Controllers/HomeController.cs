using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.NodeServices;

namespace Aesthetik.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Error()
        {
            ViewData["RequestId"] = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
            return View();
        }

        public async Task<IActionResult>NodeResult([FromServices]INodeServices nodesvc)
        {
            var result = await nodesvc.InvokeAsync<string>("ServerMath.js", 4, 5);
            ViewData["NodeResult"] = result;
            return View("NodeResult");
        }
    }
}
