import Router from 'koa-router'
import announcement from './announcement'
import user_result from './user_result'


const apiRouter = new Router()

apiRouter.use('/announcement', announcement.routes())
apiRouter.use('/userResult', user_result.routes())

export default apiRouter