import Router from "koa-router";

const router = new Router()

router.get('/', async (ctx, next) => {
    ctx.body = {msg: 'Hello world from userResult api'}
    })    

export default router
