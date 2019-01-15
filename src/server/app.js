/**
 * @description node应用入口文件
 * @author Ranjay
 */
import Koa from "koa";
import bodyParser from "koa-bodyparser";
import staticResource from "koa-static";
import router from "./routers/SiteController";
import render from "koa-swig";
import co from "co";
import errorHandler from "./middlewares/errorhandler";
import config from "./config";

const app = new Koa();
app.use(bodyParser());

errorHandler.error(app);

// 配置静态资源
app.use(staticResource(config.staticResPath));

// 配置模版引擎
app.context.render = co.wrap(
  render({
    root: config.viewPath,
    autoescape: true,
    cache: config.swigCache, // disable, set to false
    ext: "html",
    writeBody: false
  })
);

app.use(router.routes(), router.allowedMethods());

app.listen(config.port, () => {
  console.log(`website is starting at port ${config.port}`);
});

module.exports = app;
