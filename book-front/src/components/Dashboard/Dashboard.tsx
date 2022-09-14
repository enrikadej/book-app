import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { deleteBook, getBooks } from "../../api/api";
import { Book } from "../../react-app-env.d";

export const Dashboard:React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    gettingBooks();
  }, [])

  const gettingBooks = () => {
    getBooks()
      .then(response => setBooks(response))
  }

  return (
    <table className="table is-hoverable">
      <thead>
        <tr>
          <th>Book title</th>
          <th>Author name</th>
          <th>Category</th>
          <th>ISBN</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {books.map(book => (
          <tr key={book.id}>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.category}</td>
            <td>{book.ISBN}</td>
            <td>
              <button
                type="button"
                onClick={() => {
                  navigate(`../edit-book/${book.id}`)
                }}
                className="button"
              >
                Edit Book
              </button>

              <button
                type="button"
                onClick={() => {
                  deleteBook(book.id)
                    .then(() => gettingBooks())
                }}
                className="button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}