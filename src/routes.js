import {Login, Chat} from './components';
import {LOGIN_ROUTE, CHAT_ROUTE} from './utils/const';

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Login
  }
]

export const privateRoutes = [
  {
    path: CHAT_ROUTE,
    Component: Chat
  }
]
