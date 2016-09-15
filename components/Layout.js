import React, {
  Component
} from 'react'
import {
  observable,
  computed,
  action,
} from 'mobx'
import { observer } from 'mobx-react'
import { Link } from 'react-router'
import { yellow500 } from 'material-ui/styles/colors'
import { AppBar } from 'material-ui'
import {
  MuiThemeProvider,
  getMuiTheme,
} from 'material-ui/styles'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: yellow500,
  }
})

@observer
export default class layout extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <AppBar
          title="HEP"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
      </MuiThemeProvider>
    )
  }
}


