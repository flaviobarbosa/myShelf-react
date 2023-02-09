export interface BookProps {
    id: number
    isbn: string;
    cover: string;
    title: string;
    authors: string[];
    pages: number;
    startedAt: string;
    endedAt: string | null;
    stars: number;
    tags: string[];
}
