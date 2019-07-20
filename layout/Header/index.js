import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  root: {

  },
  appBar: {
    color: 'transparent'
  },
})

const Header = () => {
  const classes = useStyles();
  return (
    <header>
      <AppBar classes={classes.appBar}>


      </AppBar>
    </header>
  )
}
export default Header