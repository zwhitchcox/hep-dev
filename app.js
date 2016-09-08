import React from 'react'
import {
  Router,
  Route,
  IndexRoute,
  browserHistory,
} from 'react-router'
import Home from './components/Home'
import Page from './components/Page'
import Layout from './components/Layout'
import { render } from 'react-dom'

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Home} />
      <Route path="/:name" component={Page} />
    </Route>
  </Router>
)

render(routes, document.getElementById('app'))

console.log('loaded')
