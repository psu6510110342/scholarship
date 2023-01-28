import Router from 'koa-router'
import announcement from './announcement'
import user_result from './user_result'
import { authMiddleware } from '../auth'

const apiRouter = new Router()

apiRouter.use('/announcement', authMiddleware, announcement.routes())
apiRouter.use('/userResult', authMiddleware, user_result.routes())

export default apiRouter