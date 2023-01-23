import { Button } from 'primereact/button';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export const ProtectedLayout = () => {
  const { user, logout } = useAuth();

  if (!user)
    return <Navigate to='/' />;

  return (
    <>
      <Button label="LOGOUT" onClick={logout} style={{ backgroundColor: '#fff', color: 'var(--primary-color)'}} />
      <Outlet />
    </>
  );
};
