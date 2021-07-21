import React, {useContext} from 'react';
import {Container, Grid, Box, Button} from '@material-ui/core';
import firebase from 'firebase';

import {Context} from '../index';

const Login = () => {
  const {auth} = useContext(Context);

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const {user} = await auth.signInWithPopup(provider);
    console.log(user);
  }

  return (
    <Container>
      <Grid container
          style = {{height: window.innerHeight - 50}}
          alignItems = {'center'}
          justify = {'center'}
        >
            <Grid
              style = {{width:400, background: '#fad264'}}
              container
              alignItems = {"center"}
              direction = {"column"}
              >
                <Box p = {5}>
                  <Button
                    onClick = {login}
                    variant = {'outlined'}>Войти с помощью Google</Button>
                </Box>
            </Grid>
      </Grid>
    </Container>
  )
}

export default Login;


// window.innerHeight это высота области просмотра окна браузера.
