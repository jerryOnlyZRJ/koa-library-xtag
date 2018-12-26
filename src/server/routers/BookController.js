import Router from "koa-router";
import BookModel from "../models/Book";

const router = new Router();
const bookModel = new BookModel();

router.get("/index", async ctx => {
  ctx.body = await bookModel.actionIndex();
});

router.get("/view", async ctx => {
  ctx.body = await bookModel.actionView(ctx.query.id);
});

router.post("/delete", async ctx => {
  ctx.body = await bookModel.actionDelete({
    id: ctx.query.id
  });
});

router.post("/create", async ctx => {
  ctx.body = await bookModel.actionCreate(ctx.request.body);
});

router.post("/update", async ctx => {
  ctx.body = await bookModel.actionUpdate(ctx.request.body);
});

export default router;
