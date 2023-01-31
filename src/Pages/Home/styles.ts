import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

export const SearchBar = styled.span`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-bottom: 2rem;
`;

export const SearchIcon = styled.i`
  cursor: pointer;
`;

export const Books = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
