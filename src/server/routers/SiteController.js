import Router from "koa-router";
import BookModel from "../models/Book";
import BookController from "./BookController";
import LogController from "./LogController";
import manifest from '../assets/manifest.json'

let scripts = {}
Object.keys(manifest).map(item => {
  scripts[item.split('-')[0]] = `<script>activeJS("${manifest[item]}")</script>`
})

const fields = ["name", "author", "date", "score"];

const router = new Router();
// 串联BookController api子路由
router.use("/api", BookController.routes(), BookController.allowedMethods());
router.use("/log", LogController.routes(), LogController.allowedMethods());
const bookModel = new BookModel();

// 配置根路由
router.get("/", async ctx => {
  // ctx.router available
  const booksData = await bookModel.actionIndex()
  if (ctx.header['x-pjax']) {
    ctx.body = `<x-index books-data='${JSON.stringify(booksData)}'></x-index>` + scripts["index"]
  } else {
    ctx.body = await ctx.render("index/pages/index", {
      data: booksData
    })
  }
});

// 配置拓展路由
router.get("/create", async ctx => {
  if (ctx.header['x-pjax']) {
    ctx.body = '<x-create></x-create>' + scripts["create"]
  } else {
    ctx.body = await ctx.render("create/pages/index", {
      fields
    });
  }
});

// 配置拓展路由
router.get("/view", async ctx => {
  const bookData = await bookModel.actionView(ctx.query.id)
  if (ctx.header['x-pjax']) {
    ctx.body = `<x-view book-data='${JSON.stringify(bookData)}'></x-view>` + scripts["view"]
  } else {
    ctx.body = await ctx.render("view/pages/index", {
      data: bookData
    })
  }
})

// 配置与models配合的数据路由
router.get("/update", async ctx => {
  const bookData = await bookModel.actionView(ctx.query.id)
  if (ctx.header['x-pjax']) {
    ctx.body = `<x-update book-data='${JSON.stringify(bookData)}'></x-update>` + scripts["update"]
  } else {
    ctx.body = await ctx.render("update/pages/index", {
      data: bookData
    })
  }
})

export default router;