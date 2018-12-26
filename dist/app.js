"use strict";

var _koa = _interopRequireDefault(require("koa"));

var _koaBodyparser = _interopRequireDefault(require("koa-bodyparser"));

var _koaStatic = _interopRequireDefault(require("koa-static"));

var _SiteController = _interopRequireDefault(require("./routers/SiteController"));

var _koaSwig = _interopRequireDefault(require("koa-swig"));

var _co = _interopRequireDefault(require("co"));

var _errorhandler = _interopRequireDefault(require("./middlewares/errorhandler"));

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @description node应用入口文件
 * @author Ranjay
 */
const app = new _koa.default();
app.use((0, _koaBodyparser.default)());

_errorhandler.default.error(app); // 配置静态资源


app.use((0, _koaStatic.default)(_config.default.staticResPath)); // 配置模版引擎

app.context.render = _co.default.wrap((0, _koaSwig.default)({
  root: _config.default.viewPath,
  autoescape: true,
  cache: 'memory',
  // disable, set to false
  ext: 'html',
  writeBody: false
}));
app.use(_SiteController.default.routes(), _SiteController.default.allowedMethods());
app.listen(_config.default.port, () => {
  console.log(`website is starting at port ${_config.default.port}`);
});
module.exports = app;