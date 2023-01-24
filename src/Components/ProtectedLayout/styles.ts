import styled from 'styled-components';


export const Container = styled.div`
  min-height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;

  padding: 0 1rem;
  background-color: #fff;
  color: var(--primary-color);
`;

export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 10%;

  padding: 0 1rem;
`;

export const Title = styled.p``;

export const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 1.5rem;
`;

export const UserName = styled.p``;

export const Panel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* padding: 0.5rem; */

  cursor: pointer;

  /* &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  } */
`;
