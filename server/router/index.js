import { Router } from 'express'
import routes from './routes.js'
import issues from '../controllers/issues.js'

const router = new Router()
router.get(routes.list, issues.list)

export default router
