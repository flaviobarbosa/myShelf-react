import { Link } from 'react-router-dom';

export function Landpage() {
  return (
    <>
      <nav style={{display: 'flex', gap: '10px'}}>
        <Link to='/login'>Login</Link>
        <Link to='/signup'>Signup</Link>
      </nav>
      <h1>Landpage!</h1>

    </>
  );
}
