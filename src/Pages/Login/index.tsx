import {useState} from 'react';

import { Link } from 'react-router-dom';

import { Button } from 'primereact/button';
import { Input } from '../../Components/Input';
import { Container, Footer, Header, Form } from './styles';
import { login } from '../../utils/api';

export function Login() {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    login({email, password});
  }

  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <Header>MyShelf</Header>

        <Input
          id="email"
          placeholder="your email"
          icon="envelope"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <Input
          id="password"
          type="password"
          placeholder='your password'
          icon='lock'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <Button label="SIGN IN" type='submit' />

        <Footer>Don't have an account? <span><Link to='/signup'>Sign up</Link></span>!</Footer>
      </Form>
    </Container>
  );
}
