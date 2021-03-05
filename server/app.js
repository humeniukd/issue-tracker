import express from 'express'
import logger from 'morgan'
import bodyParser from 'body-parser'
import cors from 'cors'
import router from './router/index.js'
import config from './config/index.js'

const app = express()
const environment = process.env.NODE_ENV || 'development'
const { port } = config

app.use(bodyParser.json())
app.use(cors())
app.use(logger(environment))

app.use('/api', router)

app.listen(port, () => {
  console.log(`port=${port}`)
  console.log(`NODE_ENV=${environment}`)
})

export default app
