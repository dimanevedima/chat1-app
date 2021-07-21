import React, {useContext} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';
import {useAuthState} from 'react-firebase-hooks/auth';
import firebase from 'firebase';

import {LOGIN_ROUTE, CHAT_ROUTE} from '../utils/const';
import {Context} from '../index';

const Navbar = () => {
  const {auth} = useContext(Context);
  const [user] = useAuthState(auth);
  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const {user} = await auth.signInWithPopup(provider);
    console.log(user);
  };
  return (
    <AppBar color = {"secondary"} position="static">
    <Toolbar variant = {"dense"}>
        <Grid container justify = {"flex-end"}>
          {user ?
            <Button onClick = {() => auth.signOut()}>Log out</Button>
              :
              <NavLink to = {LOGIN_ROUTE}>
              <Button onClick = {login} variant="contained">Log in</Button>
                </NavLink>
          }
        </Grid>
    </Toolbar>
  </AppBar>
  )
}

export default Navbar;
