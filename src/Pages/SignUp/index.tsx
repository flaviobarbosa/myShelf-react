import React, {useState} from 'react';
import { Button } from 'primereact/button';
import { Input } from '../../Components/Input';
import { Container, Footer, Header } from './styles';
import { signUp } from '../../utils/api';

export function SignUp() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  async function handleSignUp() {
    signUp({name, email, password});
  }

  return (
    <Container>
      <Header>MyShelf</Header>

      <Input
        id="name"
        placeholder="your name"
        icon="user"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <Input
        id="email"
        placeholder="your email"
        icon="envelope"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <Input
        type="password"
        id="password"
        placeholder='your password'
        icon='lock'
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />


      <Button label="CREATE MY ACCOUNT" onClick={handleSignUp}/>

      <Footer>Already have an account? <span>Sign in</span>!</Footer>

    </Container>
  );
}
