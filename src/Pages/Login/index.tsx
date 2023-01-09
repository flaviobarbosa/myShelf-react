import React from 'react';
import { Button } from 'primereact/button';
import { Input } from '../../Components/Input';
import { Container, Footer, Header } from './styles';

export function Login() {
  return (
    <Container>
      <Header>MyShelf</Header>

      <Input id="email" placeholder="your email" icon="envelope" />
      <Input id="password" placeholder='your password' icon='lock'/>

      <Button label="SIGN IN" />

      <Footer>Don't have an account? <span>Sign up</span>!</Footer>

    </Container>
  );
}
