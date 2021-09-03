import { CssBaseline } from '@material-ui/core'
import React from 'react'
import ReactDOM from 'react-dom'
import Content from './includes/Content'
import Navigation from './includes/Navigation'
import Footer from './includes/Footer'

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navigation />
      <Content />
      <Footer />
    </React.Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
