using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DataBase_Model;
using Microsoft.AspNetCore.Mvc;

namespace DataBase_Api.Controllers
{
    /// <summary>
    /// 用户控制器
    /// </summary>
    public class UsersController : BaseController
    {
        /// <summary>
        /// 测试hello World
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IActionResult Hello()
        {
            return Ok("Hello World!");
        }

        /// <summary>
        /// 用户实体类测试
        /// </summary>
        /// <param name="usersModel"></param>
        /// <returns></returns>
        [HttpPost]
        public IActionResult UsersTestSwagger(UsersModel usersModel)
        {
            return Ok(usersModel);
        }
    }
}
