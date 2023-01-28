import Koa from 'koa'
import json from 'koa-json'
import { koaBody } from 'koa-body'

import apiRouter from './api'
import appConfig from './config'
import loadFixtures from './fixtures'


const app = new Koa()

app.use(json())
app.use(koaBody())
app.use(apiRouter.routes())

app.listen(8000)

loadFixtures(appConfig.ClearDataBeforeLoad)