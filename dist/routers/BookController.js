"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _koaRouter = _interopRequireDefault(require("koa-router"));

var _Book = _interopRequireDefault(require("../models/Book"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = new _koaRouter.default();
const bookModel = new _Book.default();
router.get('/index', async ctx => {
  ctx.body = await bookModel.actionIndex();
});
router.get('/view', async ctx => {
  ctx.body = await bookModel.actionView(ctx.query.id);
});
router.post('/delete', async ctx => {
  ctx.body = await bookModel.actionDelete({
    id: ctx.query.id
  });
});
router.post('/create', async ctx => {
  ctx.body = await bookModel.actionCreate(ctx.request.body);
});
router.post('/update', async ctx => {
  ctx.body = await bookModel.actionUpdate(ctx.request.body);
});
var _default = router;
exports.default = _default;