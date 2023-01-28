import Koa from 'koa'
import json from 'koa-json'
import { koaBody } from 'koa-body'

import apiRouter from './api'
import appConfig from './config'
import loadFixtures from './fixtures'
import { initSsoCert } from './auth'


const app = new Koa()

app.use(json());
app.use(koaBody());
app.use(apiRouter.routes());

(async () => {
    await loadFixtures(appConfig.ClearDataBeforeLoad)
    await initSsoCert()
    app.listen(8000)
    console.log('Server is ready at port 8000')
})();
