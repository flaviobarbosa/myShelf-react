import { Login } from '../Login';
import { AuthLayout } from '../../Components/AuthLayout';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { Landpage } from '../Landpage';
import { ProtectedLayout } from '../../Components/ProtectedLayout';
import { Home } from '../Home';
import { PublicLayout } from '../../Components/PublicLayout';
import { SignUp } from '../SignUp';


export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AuthLayout />}>
      <Route element={<PublicLayout />}>
        <Route path='/' element={<Landpage />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
      </Route>
      <Route element={<ProtectedLayout />}>
        <Route path='/home' element={<Home />}></Route>
      </Route>
    </Route>
  )
);
