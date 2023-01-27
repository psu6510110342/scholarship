import apiRouter from 'api';
import Koa from 'koa'
import { koaBody } from 'koa-body'

const app = new Koa()


app.use(koaBody());
app.use(apiRouter.routes());

app.listen(8000)