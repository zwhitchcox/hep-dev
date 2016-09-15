import React, { Component } from 'react'
import {
  Router,
  Route,
  IndexRoute,
  browserHistory
} from 'react-router'
import Home from './components/Home'
import Page from './components/Page'
import Layout from './components/Layout'
import { render } from 'react-dom'

const routes = <Route path='/' component={Layout}>
  <IndexRoute component={Home} />
  <Route path='/:name' component={Page} />
</Route>

class RenderForce extends Component {
  componentWillMount() {
    this.forceUpdate()
    console.clear()
  }
  render() {
    return <Router history={browserHistory}>
      {routes}
    </Router>
  }
}

render(<RenderForce />, document.getElementById('app'))
