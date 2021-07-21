import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

import './index.css';
import App from './App';



 // Initialize Firebase
 firebase.initializeApp(
   {
     apiKey: "AIzaSyDJPsKp7sYkSS7gaXcLq1F6qHcYZCAV79Y",
     authDomain: "chat1-react.firebaseapp.com",
     projectId: "chat1-react",
     storageBucket: "chat1-react.appspot.com",
     messagingSenderId: "440261977836",
     appId: "1:440261977836:web:fc02f503e20f2255a0e7c9",
     measurementId: "G-SPKN0GN1J7"
   }
 );

export const Context = React.createContext();

 const auth = firebase.auth();
 const firestore = firebase.firestore();




ReactDOM.render(
  <Context.Provider value = {{
      firebase,
      auth,
      firestore
    }}>
      <App />
  </Context.Provider>
  ,document.getElementById('root')
);
