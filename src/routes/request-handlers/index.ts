import { route, RouteResult } from './middleware'
import { DecodeResult } from 'routes/parser'

export const testRoute = route(() =>
  DecodeResult.ok(
    Promise.resolve(
      RouteResult.ok('Hello')
    )
  )
)
