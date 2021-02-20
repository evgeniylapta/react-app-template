import React, { FC, Suspense } from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from './stateManagement/store'
import Routes from './routes'
import ThemeProviderWrapper from './styles/ThemeProviderWrapper'
import GlobalStyles from './components/global/GlobalStyles'

const App: FC = () => (
  <ThemeProviderWrapper>
    <GlobalStyles />
    <Suspense fallback={<div>Loading...</div>}>
      <React.StrictMode>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <Routes />
          </ConnectedRouter>
        </Provider>
      </React.StrictMode>
    </Suspense>
  </ThemeProviderWrapper>
)

export default App
