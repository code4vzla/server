import { String } from 'runtypes'

import { Result } from 'utils'
import { decode } from 'routes/parser'


export const getAuthToken = (authHeader: string): Result<string, AuthorizationError> => {
  return decode(String, authHeader)
    .mapErr(() => AuthorizationError.InvalidToken)
}


export enum AuthorizationError {
  MissingHeader,
  InvalidToken,
}

export namespace AuthorizationError {
  export const toString = (e: AuthorizationError): string => {
    switch (e) {
      case AuthorizationError.InvalidToken: {
        return 'Invalid Token'
      }

      case AuthorizationError.MissingHeader: {
        return 'Missing `Authorization` header'
      }
    }
  }
}

export enum SessionError {
  InvalidSession,
}

export namespace SessionError {
  export const toString = (e: SessionError): string => {
    switch (e) {
      case SessionError.InvalidSession: {
        return 'Invalid Session'
      }
    }
  }
}

export class SessionManager {
  constructor(_req: any) {}
}
