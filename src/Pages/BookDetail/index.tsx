import { useEffect, useState } from 'react';
import {  useNavigate, useParams } from 'react-router-dom';
import { SearchBar } from '../../Components/SearchBar';
import { Actions, Authors, BookCover, BookDetails, BookInfo, Container, Pages, Tags, Title } from './styled';

import {books} from '../../mocks/books';
import { BookProps } from '../../types/books';
import { Chips } from 'primereact/chips';
import { Input } from '../../Components/Input';
import { Button } from 'primereact/button';

export const BookDetail = () => {

  const { bookId } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState<BookProps | undefined>(undefined);

  useEffect(() => {
    if(bookId){
      const _book = books.find(item => item.id === +bookId);

      _book ? setBook(_book) : navigate('/home');
    }
  }, [bookId]);

  const handleSave = () => {
    navigate('/home');
  };

  return (
    <Container>
      <SearchBar query={book?.isbn} />

      <BookInfo>
        <BookCover src={book?.cover} alt={book?.title} />
        <BookDetails>
          <Title>
            <Input
              id="title"
              value={book?.title}
              label="Title"
            />
          </Title>

          <Authors>
            <Input
              id="authors"
              value={book?.authors.join(', ')}
              label="Authors"
            />
          </Authors>

          <Pages>
            <Input
              id="pages"
              value={book?.pages}
              label='Pages'
            />
          </Pages>

          <Tags>
            <Chips value={ book?.tags} />
          </Tags>
        </BookDetails>
      </BookInfo>

      <Actions>
        <Button label="CANCEL" className="p-button-text" onClick={() => navigate('/home')}/>
        <Button label="SAVE" onClick={handleSave} />
      </Actions>

    </Container>
  );
};
