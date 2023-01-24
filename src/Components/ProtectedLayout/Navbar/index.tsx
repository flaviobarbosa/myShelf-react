import { Avatar } from 'primereact/avatar';
import { OverlayPanel } from 'primereact/overlaypanel';
import { useRef } from 'react';
import { Panel } from '../styles';
import { Container, Title } from './styles';

interface NavBarProps {
  displayName: string;
  logout: () => void;
}

export const Navbar = ({ displayName, logout }: NavBarProps) => {
  const op = useRef(null);

  const avatarLavel = displayName.charAt(0).toUpperCase();

  return (
    <Container>
      <Title className='text-4xl font-bold'>MyShelf</Title>

      <Avatar
        label={avatarLavel}
        shape="circle"
        size="large"
        style={{ color: 'var(--primary-color)' }}
        onClick={(e) => op.current.toggle(e)} aria-controls="popup_menu" aria-haspopup />

      <OverlayPanel ref={op} id="overlay_panel" style={{minWidth: '8rem'}}>
        <Panel onClick={logout}>
          <p className='text-base'>Sign out</p>
          <i className="pi pi-sign-out"></i>
        </Panel>
      </OverlayPanel>

    </Container>
  );
};
