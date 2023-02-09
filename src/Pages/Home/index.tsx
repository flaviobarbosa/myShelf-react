import { Books, Container } from './styles';
import { books } from '../../mocks/books';
import { Book } from '../../Components/Book';
import { SearchBar } from '../../Components/SearchBar';

export const Home = () => {

  return (
    <Container>
      <SearchBar />

      <Books>
        { books.map(book => <Book key={book.id} {...book} />) }
      </Books>

    </Container>
  );
};
