import React from 'react'
import {
  CssBaseline,
  Container,
  Grid,
  Button,
  Divider,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: '#ffffff',
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}))

const Main = (props) => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.heroContent}>
        <Container maxWidth="lg">
          {props.children}

          <Divider className={classes.divider} />
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <Button variant="outlined" color="primary">
                  More About MyApp
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Main
