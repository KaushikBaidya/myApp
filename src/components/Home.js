import React from 'react'
import Header from './includes/Head'
import Main from './includes/Main'
import { CssBaseline } from '@material-ui/core'

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Main></Main>
    </React.Fragment>
  )
}

export default App
