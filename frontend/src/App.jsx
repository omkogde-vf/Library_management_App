import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookList from './components/BookList';
import NewBook from './components/NewBook';
import EditBook from './components/EditBook';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/new" element={<NewBook />} />
        <Route path="/edit/:id" element={<EditBook />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
