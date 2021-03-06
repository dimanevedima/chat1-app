import React, {useContext} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {LOGIN_ROUTE, CHAT_ROUTE} from '../utils/const';
import {useAuthState} from 'react-firebase-hooks/auth';

//Switch Сгруппировывает наши маршруты и если ни один не выполнится то
// будет выполняться самы последний роутер в этом свиче

import {privateRoutes, publicRoutes} from '../routes';
import {Context} from '../index';

const AppRouter = () => {
  const {auth} = useContext(Context);
  const [user] = useAuthState(auth);
  return user ? (
    <Switch>
      {privateRoutes.map(({path, Component}) =>
        <Route key = {path} path = {path} component = {Component} exact = {true}/>
      )}
      <Redirect to = {CHAT_ROUTE}/>
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map(({path, Component}) =>
        <Route key = {path} path = {path} component = {Component} exact = {true}/>
      )}
      <Redirect to = {LOGIN_ROUTE}/>
    </Switch>
  )
}

export default AppRouter;
