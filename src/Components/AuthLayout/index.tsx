import { Outlet } from 'react-router-dom';
import { AuthProvider } from '../../contexts/authContext';
import { Container } from './styles';

export function AuthLayout() {

  return (
    <Container className='bg-primary'>
      <AuthProvider>
        <Outlet />
      </AuthProvider>
    </Container>
  );
}
