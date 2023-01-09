import React from 'react';
import { Container } from './styles';

import { Login } from '../Login';
import { SignUp } from '../SignUp';

export function App() {

  return (
    <Container className='bg-primary'>

      {/* <Login /> */}
      <SignUp />

    </Container>
  );
}

