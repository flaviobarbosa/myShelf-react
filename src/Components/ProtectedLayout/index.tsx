import { useRef } from 'react';

import { Button } from 'primereact/button';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Container, NavBar, Title, UserInfo, UserName } from './styles';

import { Avatar } from 'primereact/avatar';
import { Menu } from 'primereact/menu';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Navbar } from './Navbar';

export const ProtectedLayout = () => {
  const { user, logout } = useAuth();

  if (!user)
    return <Navigate to='/' />;

  const op = useRef(null);

  return (
    <Container>
      <Navbar displayName={user.displayName} logout={logout} />
      <Outlet />
    </Container>
  );
};
