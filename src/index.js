import { CssBaseline } from '@material-ui/core'
import React from 'react'
import ReactDOM from 'react-dom'
import Header from './includes/Head'
import Main from './includes/Main'
import Footer from './includes/Footer'
import Auth from './Auth'

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Main>
        <Auth />
      </Main>
      <Footer />
    </React.Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
