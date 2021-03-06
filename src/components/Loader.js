import React from 'react';
import {Container, Grid} from '@material-ui/core';

const Loader = () => {
  return (
    <Container>
      <Grid container
          style = {{height: window.innerHeight - 50}}
          alignItems = {'center'}
          justify = {'center'}
        >
            <Grid
              container
              alignItems = {"center"}
              direction = {"column"}
              >
              <h1>LOADING....</h1>
                <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </Grid>
      </Grid>
    </Container>
  )
}

export default Loader;
