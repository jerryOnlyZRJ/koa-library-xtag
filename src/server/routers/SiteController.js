import Router from "koa-router";
import BookModel from "../models/Book";
import BookController from "./BookController";

const fields = ["name", "author", "date", "score"];

const router = new Router();
// 串联BookController api子路由
router.use("/api", BookController.routes(), BookController.allowedMethods());
const bookModel = new BookModel();

// 配置根路由
router.get("/", async ctx => {
  // ctx.router available
  ctx.body = await ctx.render("index/pages/index", {
    data: await bookModel.actionIndex()
  });
});

// 配置拓展路由
router.get("/create", async ctx => {
  ctx.body = await ctx.render("create/pages/index", {
    fields
  });
});

// 配置拓展路由
router.get("/view", async ctx => {
  ctx.body = await ctx.render("view/pages/index", {
    data: await bookModel.actionView(ctx.query.id)
  });
});

// 配置与models配合的数据路由
router.get("/update", async ctx => {
  ctx.body = await ctx.render("update/pages/index", {
    data: await bookModel.actionView(ctx.query.id)
  });
});

export default router;
