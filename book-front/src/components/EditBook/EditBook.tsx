import { useEffect, useState } from "react";
import { editBook, get1Book } from "../../api/api";
import { useNavigate, useParams } from "react-router";

export const EditBook:React.FC = () => {
  const [id, setId] = useState(1)
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [ISBN, setISBN] = useState(1);

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (params.id) {
      get1Book(+params.id)
        .then(response => {
          setId(response.id)
          setTitle(response.title);
          setAuthor(response.author);
          setCategory(response.category);
          setISBN(response.ISBN);
        })
    }
  }, [])

  const handleOnSubmit = () => {
    if (title && author) {
      editingBook();
      alert("S U C C E S S !")
    }
  }
  
  const editingBook = () => {
    const tempBook = {
      id,
      title,
      author,
      category,
      ISBN,
    }

    if (tempBook) {      
      editBook(tempBook)
        .then(response => console.log(response))
        .then(() => navigate('../dashboard'))
    }
  }

  return (
    <form className="form" onSubmit={(event) => {
      event.preventDefault();
    }}>

      <h1 className="title">Edit book ^-^</h1>

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
        onClick={handleOnSubmit}
      >
        Submit
      </button>
    </form>
  )
}