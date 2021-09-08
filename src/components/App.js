import React from 'react'
import Header from './includes/Head'
import Main from './includes/Main'
import Footer from './includes/Footer'
import Auth from './Auth'
import PictureCard from './PictureCard'
import { CssBaseline } from '@material-ui/core'

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Main>
        <Auth />
        <PictureCard />
      </Main>
      <Footer />
    </React.Fragment>
  )
}

export default App
