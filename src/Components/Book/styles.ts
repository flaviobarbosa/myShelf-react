import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem;
`;

export const BookInfo = styled.div`
  display: flex;
`;

export const BookCover = styled.img`
  width: 130px;
  height: 200px;
  margin-right: 1rem;
`;

export const BookDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.p`
  margin-bottom: 0.5rem;
`;

export const Authors = styled.p`
  margin-bottom: 0.5rem;
`;

export const Pages = styled.p`
  margin-bottom: 0.5rem;
`;

export const Dates = styled.div`
  margin-bottom: 0.5rem;
`;

export const Start = styled.span`
`;

export const End = styled.span`
`;

export const Tags = styled.div`
  margin-top: 1rem;
`;

export const Actions = styled.div`
  display: flex;
 justify-content: center;
  align-items: center;

  gap: 1rem;
`;

export const Comment = styled.div`
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Edit = styled.div`
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Trash = styled.div`
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;
