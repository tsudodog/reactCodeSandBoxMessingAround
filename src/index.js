import React from 'react'
import ReactDOM from 'react-dom'
import Comment from './Comment'
import Divider from '@material-ui/core/Divider'
import CommentContainer from './CommentContainer'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'
import './styles.css'
import { blue, amber } from '@material-ui/core/colors'
const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: {
      main: amber[500],
      light: amber[200]
    }
  }
})

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        {/* <img class="avatar" alt="zanethefox" src="//a.facdn.net/1518896239/zanethefox.gif"></img> */}
        <CommentContainer />
      </div>
    </MuiThemeProvider>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
