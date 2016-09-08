import React, {
  Component
} from 'react'
import {
  observable,
  computed,
  action,
} from 'mobx'
import {
  observer,
} from 'mobx-react'
import {
  Link,
} from 'react-router'

@observer
export default class layout extends Component {
  render() {
    return (
      <div>
      <div>This is the layout.</div>
      <div>{this.props.children}</div>
      </div>
    )
  }
}


