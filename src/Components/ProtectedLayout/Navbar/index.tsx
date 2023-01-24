import { Avatar } from 'primereact/avatar';
import { OverlayPanel } from 'primereact/overlaypanel';
import { useRef } from 'react';
import { Panel } from '../styles';
import { Container, Title, UserInfo, UserName } from './styles';

interface NavBarProps {
  displayName: string;
  logout: () => void;
}

export const Navbar = ({ displayName, logout }: NavBarProps) => {
  const op = useRef(null);

  return (
    <Container>
      <Title className='text-4xl'>MyShelf</Title>

      <UserInfo>
        <UserName className='text-2xl'>{displayName}</UserName>

        <Avatar
          icon="pi pi-user"
          shape="circle"
          size="large"
          style={{ backgroundColor: '#fff', color: 'var(--primary-color)' }}
          onClick={(e) => op.current.toggle(e)} aria-controls="popup_menu" aria-haspopup />

        <OverlayPanel ref={op} id="overlay_panel" style={{minWidth: '8rem'}}>
          <Panel onClick={logout}>
            <p className='text-base'>Sign out</p>
            <i className="pi pi-sign-out"></i>
          </Panel>
        </OverlayPanel>
      </UserInfo>

    </Container>
  );
};
