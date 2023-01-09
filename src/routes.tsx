import { createBrowserRouter } from 'react-router-dom';
import { App } from './Pages/App';
import { Login } from './Pages/Login';
import { SignUp } from './Pages/SignUp';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: []
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <SignUp />
  }
]);
