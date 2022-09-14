import { Book } from "../react-app-env";

const URL = 'http://localhost:3000';

export const getBooks = async () => {
  const response = await fetch(`${URL}/books`);

  return response.json();
};

export const get1Book = async (id: number) => {
  const response = await fetch(`${URL}/books/${id}`);

  return response.json();
};

export const postBook = async (book: Book): Promise<Book> => {
  const response = await fetch(`${URL}/books`, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-type': 'application/json',
    },
  });

  return response.json();
};

export const deleteBook = async (bookId: number): Promise<Book> => {
  const response = await fetch(`${URL}/books/${bookId}`, {
    method: 'DELETE',
  });

  return response.json();
};

export const editBook = async (book: Book): Promise<Book> => {
  const response = await fetch(`${URL}/books/${book.id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(book),
  });

  return response.json();
};
