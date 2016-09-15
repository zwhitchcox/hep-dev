import React, { Component } from 'react'
import { observable, computed, action } from 'mobx'
import { observer } from 'mobx-react'
import { Link } from 'react-router'

@observer
export default class Page extends Component {
  render() {
    return (
      <div>This is the home page 2.</div>
    )
  }
}

