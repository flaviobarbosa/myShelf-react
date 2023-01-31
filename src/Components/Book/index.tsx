import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';

import { Actions, Authors, BookCover, BookDetails, BookInfo, Comment, Container, Dates, Edit, Pages, Start, Tags, Title, Trash } from './styles';

interface BookProps {
    cover: string;
    title: string;
    authors: string[];
    pages: number;
    startedAt: string;
    endedAt: string;
    stars: number;
    tags: string[];
}

export const Book = ({ cover, title, authors, pages, startedAt, endedAt,stars, tags }: BookProps) => {
  return (
    <Container>
      <BookInfo>
        <BookCover src={cover} alt={title} />
        <BookDetails>
          <Title className='text-2xl font-semibold'>{title}</Title>
          <Authors className='text-base'>{authors.join(', ')}</Authors>
          <Dates>
            <Pages className='text-base'>{pages} pages</Pages>
            <Start>{startedAt}</Start> {endedAt && `- ${endedAt}`}
          </Dates>
          <Rating value={stars} readOnly cancel={false} />
          <Tags>
            {
              tags.map(tag => <Tag key={tag} value={tag} style={{marginRight: '0.25rem'}}></Tag>)
            }
          </Tags>
        </BookDetails>
      </BookInfo>

      <Actions>
        <Comment><i className="pi pi-comment"></i></Comment>
        <Edit><i className="pi pi-pencil"></i></Edit>
        <Trash><i className="pi pi-trash"></i></Trash>
      </Actions>
    </Container>
  );
};
