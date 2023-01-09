import { Link } from 'react-router-dom';

import { Button } from 'primereact/button';
import { Input } from '../../Components/Input';
import { Container, Footer, Header, Form } from './styles';

export function Login() {

  return (
    <Container>
      <Form>
        <Header>MyShelf</Header>

        <Input id="email" placeholder="your email" icon="envelope" />
        <Input id="password" type="password" placeholder='your password' icon='lock'/>

        <Button label="SIGN IN" />

        <Footer>Don't have an account? <span><Link to='/signup'>Sign up</Link></span>!</Footer>
      </Form>
    </Container>
  );
}
