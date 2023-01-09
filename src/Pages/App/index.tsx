import { Container } from './styles';

import { Outlet, Link } from 'react-router-dom';

export function App() {
  return (
    <Container className='bg-primary'>

      {/* <Login /> */}
      {/* <SignUp /> */}
      Here is the app!

      <Link to='/login'>Login</Link>
      <Link to='/signup'>Signup</Link>

      <Outlet />
    </Container>
  );
}

