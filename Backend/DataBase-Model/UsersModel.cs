using System;
using System.Collections.Generic;
using System.Text;

namespace DataBase_Model
{
    /// <summary>
    /// 用户实体类
    /// </summary>
    public class UsersModel
    {
        /// <summary>
        /// 用户ID
        /// </summary>
        public int id { get; set; }

        /// <summary>
        /// 用户姓名
        /// </summary>
        public string name { get; set; }

        /// <summary>
        /// 用户年龄
        /// </summary>
        public int age { get; set; }
    }
}
