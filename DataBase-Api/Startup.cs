using System;
using System.IO;
using System.Reflection;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;

namespace DataBase_Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            //配置跨域处理，允许所有来源
            services.AddCors(options =>
            {
                options.AddPolicy("cors",
                    builder => builder.AllowAnyOrigin()
                    .AllowAnyHeader()
                    .AllowAnyMethod()
                );
            });

            services.AddControllers();
            //注册Swagger
            services.AddSwaggerGen(options =>
            {
                options.SwaggerDoc("v1", new OpenApiInfo { Title = "My API", Version = "v1" });
                // 获取xml文件名
                var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
                // 获取xml文件路径
                var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
                // 添加控制器层注释，true表示显示控制器注释
                options.IncludeXmlComments(xmlPath, true);
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint($"/swagger/v1/swagger.json", $"XUnit.Core V1");
                c.RoutePrefix = string.Empty;     //如果是为空 访问路径就为 根域名/index.html,注意localhost:8001/swagger是访问不到的
                //路径配置，设置为空，表示直接在根域名（localhost:8001）访问该文件
                // c.RoutePrefix = "swagger"; // 如果你想换一个路径，直接写名字即可，比如直接写c.RoutePrefix = "swagger"; 则访问路径为 根域名/swagger/index.html
            });

            app.UseHttpsRedirection();

            app.UseRouting();

            //允许所有跨域，cors是在ConfigureServices方法中配置的跨域策略名称
            //注意：UseCors必须放在UseRouting和UseEndpoints之间
            app.UseCors("cors");

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                //跨域需添加RequireCors方法，cors是在ConfigureServices方法中配置的跨域策略名称
                endpoints.MapControllers().RequireCors("cors");
            });
        }
    }
}
