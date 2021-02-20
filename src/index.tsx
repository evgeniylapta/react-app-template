import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { sagaMiddleware } from './stateManagement/middleware'
import saga from './stateManagement/sagas'
import store from './stateManagement/store'
import startBrowserStorageUpdate from './stateManagement/localStorage'
import './i18n'

ReactDOM.render(<App />, document.getElementById('root'))

startBrowserStorageUpdate(store)

sagaMiddleware.run(saga)
