import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { Dialog } from 'primereact/dialog';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';

import { Actions, Authors, BookCover, BookDetails, BookInfo, Comment, Container, Dates, Edit, Pages, Start, Tags, Title, Trash } from './styles';
import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';

interface BookProps {
    id: number
    cover: string;
    title: string;
    authors: string[];
    pages: number;
    startedAt: string;
    endedAt: string | null;
    stars: number;
    tags: string[];
}

export const Book = ({ id, cover, title, authors, pages, startedAt, endedAt, stars, tags }: BookProps) => {
  const [isCommentModalVisible, setIsCommentModalVisible] = useState<boolean>(false);
  const [newComment, setNewComment] = useState<string>('');
  const { addComment } = useAuth();

  const handleCloseModal = () => {
    setNewComment('');
    setIsCommentModalVisible(false);
  };

  const handleAddComment = () => {
    if(newComment)
      addComment(id, newComment);

    handleCloseModal();
  };

  const footerContent = (
    <div>
      <Button label="Cancel" icon="pi pi-times" onClick={handleCloseModal} className="p-button-text" />
      <Button label="Add" icon="pi pi-check" onClick={handleAddComment} autoFocus disabled={!newComment} />
    </div>
  );

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
        <Comment>
          <i className="pi pi-comment" onClick={() => setIsCommentModalVisible(true)}></i>

          <Dialog
            header={`New comment for ${ title }`}
            visible={isCommentModalVisible}
            onHide={handleCloseModal}
            footer={footerContent}
            style={{width: '50%'}}
          >
            <InputTextarea
              autoResize value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              style={{width: '100%'}}
            />
          </Dialog>
        </Comment>
        <Edit><i className="pi pi-pencil"></i></Edit>
        <Trash><i className="pi pi-trash"></i></Trash>
      </Actions>
    </Container>
  );
};

