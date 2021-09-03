import React from 'react'
import {
  CssBaseline,
  Container,
  Typography,
  Grid,
  Button,
  Divider,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Auth from '../Auth'

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: '#ffffff',
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}))

const Content = () => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.heroContent}>
        <Container maxWidth="lg">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            This Is MYAPP
          </Typography>
          <Auth />

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

export default Content
