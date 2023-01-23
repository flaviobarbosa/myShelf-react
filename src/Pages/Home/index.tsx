import { useAuth } from '../../hooks/useAuth';

export const Home = () => {
  const { user } = useAuth();

  return (
    <>
      <h2>Welcome, {user?.displayName}</h2>
    </>
  );
};
