import React from 'react'
import { Route, Switch } from 'react-router'
import ScrollToTop from './components/global/ScrollToTop'
import Home from './components/pages/Home'

const Routes = () => (
  <ScrollToTop>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  </ScrollToTop>
)

export default Routes
