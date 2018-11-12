import React, { PureComponent } from 'react'
import { Switch, Route } from 'react-router-dom'
import * as routes from 'Constants/routes'
import { Login, Storage } from './Pages'

export default class App extends PureComponent {
  render() {
    return (
      <Switch>
        <Route component={Login} path={routes.login} />
        <Route component={Storage} path={routes.storage} />
      </Switch>
    )
  }
}
