"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _koaRouter = _interopRequireDefault(require("koa-router"));

var _Book = _interopRequireDefault(require("../models/Book"));

var _BookController = _interopRequireDefault(require("./BookController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const fields = ["name", "author", "date", "score"];
const router = new _koaRouter.default(); // 串联BookController api子路由

router.use('/api', _BookController.default.routes(), _BookController.default.allowedMethods());
const bookModel = new _Book.default(); // 配置根路由

router.get('/', async ctx => {
  // ctx.router available
  ctx.body = await ctx.render('index/pages/index', {
    data: await bookModel.actionIndex()
  });
}); // 配置拓展路由

router.get('/create', async ctx => {
  ctx.body = await ctx.render('create', {
    fields
  });
}); // 配置拓展路由

router.get('/view', async ctx => {
  ctx.body = await ctx.render('view', {
    data: await bookModel.actionView(ctx.query.id)
  });
}); // 配置与models配合的数据路由

router.get('/update', async ctx => {
  ctx.body = await ctx.render('update', {
    data: await bookModel.actionView(ctx.query.id)
  });
});
var _default = router;
exports.default = _default;