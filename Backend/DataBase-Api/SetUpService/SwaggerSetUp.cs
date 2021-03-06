using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace DataBase_Api.SetUpService
{
    public static class SwaggerSetUp
    {
        public static void AddSwaggerSetup(this IServiceCollection services)
        {
            if (services == null) throw new ArgumentNullException(nameof(services));

            var ApiName = "Webapi.Core";

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("V1", new OpenApiInfo
                {
                    // {ApiName} 定义成全局变量，方便修改
                    Version = "V1",
                    Title = $"{ApiName} DataBase表数据—3.0",
                    Description = $"{ApiName} HTTP API V1",

                });
                c.OrderActionsBy(o => o.RelativePath);

                // 获取xml注释文件的目录
                var xmlPath = Path.Combine(AppContext.BaseDirectory, "DataBase-Api.xml");
                c.IncludeXmlComments(xmlPath, true);//默认的第二个参数是false，这个是controller的注释，记得修改

                // 获取xml注释文件的目录
                var xmlPathModel = Path.Combine(AppContext.BaseDirectory, "DataBase-Model.xml");
                c.IncludeXmlComments(xmlPathModel, true);//默认的第二个参数是false，这个是controller的注释，记得修改
            });

        }
    }
}
