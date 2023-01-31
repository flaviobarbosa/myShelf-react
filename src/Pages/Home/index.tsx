import { InputText } from 'primereact/inputtext';
import { Books, Container, SearchBar, SearchIcon } from './styles';
import { books } from '../../mocks/books';
import { Book } from '../../Components/Book';

export const Home = () => {

  return (
    <Container>
      <SearchBar className="p-input-icon-right">
        <SearchIcon className="pi pi-search" onClick={alert.bind(this, 'dfsf')} />
        <InputText />
      </SearchBar>

      <Books>
        { books.map(book => <Book key={book.isbn} {...book} />) }
      </Books>

    </Container>
  );
};
