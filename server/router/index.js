import { Router } from 'express'
import routes from './routes.js'
import issues from '../controllers/issues.js'

const errorWrapper = (fn) => async (req, res) => {
  try {
    const data = await fn(req, res)
    res.send(data)
  } catch (e) {
    console.error(e.stack)
    return res.status(e.statusCode || 500).send(e.message)
  }
}

const router = new Router()
router.get(routes.list, errorWrapper(issues.list))
router.patch(routes.patch, errorWrapper(issues.patch))

export default router
