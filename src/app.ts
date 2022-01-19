import express, { Router, Request, Response } from 'express'
import * as http from 'http'

import cors from 'cors'
import api from './api'
import debug from 'debug'
import { errorLoggerMiddleware, loggerMiddleware } from './middlewares/logger.middleware'

const app: express.Application = express()
const server: http.Server = http.createServer(app)
const port = 3000
const debugLog: debug.IDebugger = debug('app')

app.use(express.json())
app.use(cors())
app.use(loggerMiddleware)
app.use(errorLoggerMiddleware)

// Routes
const apiRouter = Router()
apiRouter.use('/api', api)
app.use(apiRouter)

// 404
app.use('*', (_request: Request, response: Response) => {
  return response.status(404).json({message: 'Not Found'})
})

// this is a simple route to make sure everything is working properly
server.listen(port, () => {
    debugLog(`Server running at http://localhost:${port}`)
})
