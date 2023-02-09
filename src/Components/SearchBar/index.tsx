import { InputText } from 'primereact/inputtext';
import { Bar, Container, SearchIcon } from './styled';

interface SearchBarProps {
  query?: string;
  disabled?: boolean;
}

export const SearchBar = ({query, disabled}: SearchBarProps) => {

  return (
    <Container>
      <Bar className="p-input-icon-right">
        {!disabled && <SearchIcon className="pi pi-search" onClick={alert.bind(this, 'dfsf')} />}
        <InputText value={query} disabled={disabled} />
      </Bar>
    </Container>
  );
};
