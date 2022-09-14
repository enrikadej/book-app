import './App.scss';
import {
  NavLink, Routes, Route, Navigate,
} from 'react-router-dom';
import { AddBook } from './components/AddBook';
import { Dashboard } from './components/Dashboard';
import { EditBook } from './components/EditBook';

export const App: React.FC = () => {

  return (
    <div className="App">
      <nav className="App__tabs">
        <NavLink
            to="/dashboard"
            className={({isActive}) => (`App__button ${isActive ? 'activeLink' : 'inactiveLink'}`)}
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/add-book"
            className={({isActive}) => (`App__button ${isActive ? 'activeLink' : 'inactiveLink'}`)}
          >
            Add Book
          </NavLink>
      </nav>

      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Navigate to="/dashboard" />} />

        <Route path="/add-book" element={
            <AddBook />
          }
        />
        <Route path="/edit-book/:id" element={
            <EditBook />
          }
        />

      </Routes>
    </div>
  )
}