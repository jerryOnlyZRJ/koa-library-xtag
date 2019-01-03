import Router from "koa-router"

const router = new Router();

router.post("/performance", async ctx => {
    console.log(ctx.request.body)
    ctx.body = "log 成功"
});

export default router
