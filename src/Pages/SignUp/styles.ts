import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--primary-color);
  color: var(--primary-color-text);

  display: grid;
  place-content: center;

  min-height: 100vh;
`;

export const Form = styled.form`
  color: var(--primary-color);
  background-color: var(--primary-color-text);

  min-height: 30vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.03), 0px 0px 2px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.12);

   padding: 3rem;

  div {
    margin: 0.5rem 1rem;
  }

  button {
    margin-top: 1.5rem;
  }

`;

export const Header = styled.h1`
  font-size: 3rem;

  margin-bottom: 2rem;
`;

export const Footer = styled.p`
  margin-top: 1.5rem;
  font-size: small;
  color: var(--surface-600);

  span {
    text-decoration: underline;
    cursor: pointer;
  }
`;
