import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'connected-react-router'
import { History } from 'history'

export const sagaMiddleware = createSagaMiddleware()

export function getMiddleware(history: History) {
  return [
    sagaMiddleware,
    routerMiddleware(history),
  ]
}
