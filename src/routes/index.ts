import { Router } from 'express'
import * as cors from 'cors'

import { testRoute } from './request-handlers'

const rootRouter = Router()

const corsOptions = {
  allowedHeaders : ['Authorization', 'Content-Type']
}

rootRouter.use(cors(corsOptions))

rootRouter.use(
  '/hello',
  testRoute
)

export default rootRouter
