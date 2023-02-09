import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BookInfo = styled.div`
  display: flex;
`;

export const BookCover = styled.img`
  width: 260px;
  height: 400px;
  margin-right: 1rem;
`;

export const BookDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.div`
  margin-bottom: 1rem;
`;

export const Authors = styled.div`
  margin-bottom: 1rem;
`;

export const Pages = styled.div`
  margin-bottom: 1rem;
`;

export const Tags = styled.div`
  margin-bottom: 1rem;
  max-width: 25rem;
`;

export const Actions = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
`;
