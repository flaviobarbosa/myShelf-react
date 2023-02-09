
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Container } from './styles';

import { Navbar } from './Navbar';

export const ProtectedLayout = () => {
  const { user, logout } = useAuth();

  if (!user)
    return <Navigate to='/' />;

  return (
    <Container>
      <Navbar displayName={user.displayName} logout={logout} />
      <Outlet />
    </Container>
  );
};
