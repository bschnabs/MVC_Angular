using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MVC_Angular.Startup))]
namespace MVC_Angular
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
