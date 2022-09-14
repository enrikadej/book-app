import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getBooks, postBook } from "../../api/api";

export const AddBook:React.FC = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("Fantasy");
  const [ISBN, setISBN] = useState(1);

  const [count, setCount] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    getBooks()
      .then(response => setCount(response.length))
  }, [])

  
  const handleOnSubmit = () => {
    if (title && author) {
      addingBook();
      alert("S U C C E S S !");
    }
  }
  
  const addingBook = () => {
    const tempBook = {
      id: count + 1,
      title,
      author,
      category,
      ISBN,
    }

    if (tempBook) {
      postBook(tempBook)
        .then(response => console.log(response))
        .then(() => navigate('../dashboard'))
    }
  }

  return (
    <form className="form" onSubmit={(event) => {
      event.preventDefault();
    }}>

      <h1 className="title">Add book ^-^</h1>

      <div className="field">
        <label className="subtitle">
          Book title
          <div className="control">
            <input 
              type="text" 
              name="title"
              value={title}
              className="input"
              onChange={(event) => setTitle(event.target.value)}
              required
            />
          </div>
        </label>
      </div>

      <div className="field">
        <label className="subtitle">
          Author name
          <div className="control">
            <input 
              type="text" 
              name="author"
              value={author}
              className="input"
              onChange={(event) => setAuthor(event.target.value)}
              required
            />
          </div>
        </label>
      </div>

      <div className="field">
        <label className="subtitle">
          Category
          <div className="control">
            <select
              value={category}
              className="select is-info"
              onChange={(event) => setCategory(event.target.value)}
              required
            >
              <option value="Fantasy">Fantasy</option>
              <option value="Children">Children</option>
              <option value="Fiction">Fiction</option>
              <option value="Romance">Romance</option>
              <option value="Horror">Horror</option>
            </select>
          </div>
        </label>
      </div>

      <div className="field">
        <label className="subtitle">
          ISBN
          <div className="control">
            <input 
              type="number"
              min={1}
              max={10}
              name="ISBN"
              value={ISBN}
              className="input"
              onChange={(event) => setISBN(+event.target.value)}
              required
            />
          </div>
        </label>
      </div>

      <button 
        type="submit"
        className="button is-primary"
        onClick={() => handleOnSubmit()}
      >
        Submit
      </button>
    </form>
  )
}