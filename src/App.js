import React, {useContext} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {useAuthState} from 'react-firebase-hooks/auth';


import {Context} from './index';

import './App.css';

import {Navbar, Message, Login, Chat, AppRouter, Loader} from './components';

const App = () => {
  const {auth} = useContext(Context);
  const [user, loading, error] = useAuthState(auth);

  if(loading) {
    return <Loader/>
  }
  return (
    <Router>
        <Navbar/>
        <AppRouter/>
    </Router>
  );
}

export default App;
