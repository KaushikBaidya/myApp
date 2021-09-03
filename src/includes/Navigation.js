import React from 'react'
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core'
import AdbTwoToneIcon from '@material-ui/icons/AdbTwoTone'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bgColor: {
    backgroundColor: '#303F9F',
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
}))

const Navigation = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static" gutterBottom>
        <Toolbar className={classes.bgColor}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <AdbTwoToneIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title} color="inherit">
            MYAPP
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navigation
