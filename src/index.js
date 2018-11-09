import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import createStore from './Redux'
import './index.css'
import App from './Components/App'
import * as serviceWorker from './serviceWorker'

const history = createBrowserHistory()

ReactDOM.render(
  <Provider store={createStore(history)}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
