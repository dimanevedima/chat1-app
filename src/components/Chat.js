import React, {useState, useContext} from 'react';
import {Container, Grid, Box, Button, TextField, Avatar} from '@material-ui/core';
import {useAuthState} from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebase from 'firebase';

import {Loader} from './index';
import {Context} from '../index';

const Chat = () => {
  const {auth, firestore} = useContext(Context);
  const [user] = useAuthState(auth);
  const [value, setValue] = useState('');
  const [messages, loading] = useCollectionData(
      firestore.collection('messages').orderBy('createdAt')
  );

  const sendMessage = async () => {
    if(value){
      firestore.collection('messages').add({
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL,
        text: value,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      })
      console.log(value);
      setValue("");
    }
  }

if(loading){
  return <Loader/>
}

  return (
      <Container>
        <Grid container
            justify = {"center"}
            style = {{height: window.innerHeight - 50}}>
            <div style = {{marginTop: '5px', width: '80%', height: '70vh', border: '1px solid gray', overflowY: 'auto'}}>
                {messages.map(message =>
                    <div style = {{
                        margin: 10,
                        border: user.uid === message.uid ? '2px solid green' : '2px dashed red',
                        marginLeft: user.uid === message.uid ? 'auto' : '10px',
                        width: '30%',
                        padding: 5
                      }}>
                      <Grid container>
                        <Avatar src = {message.photoURL} />
                        <div>{message.displayName}</div>
                      </Grid>
                      <div>{message.text}</div>
                    </div>
                )}
            </div>
            <Grid
                container
                direction = {'column'}
                alignItems = {'flex-end'}
                style = {{width: '80%'}}
              >
                <TextField
                  value = {value}
                  onChange = {e => setValue(e.target.value)}
                  fullWidth
                  rowsMax = {3}
                  variant = {'outlined'}/>
                <Button
                    onClick = {sendMessage}
                    variant = {'outlined'}>Отправить</Button>
            </Grid>
          </Grid>
      </Container>
  )
}

export default Chat;
