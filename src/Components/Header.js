import React from 'react'
import { AppBar, Toolbar, IconButton, MenuIcon, Typography, Button } from '@material-ui/core'

export default function Header() {
  return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Header
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
  )
}
