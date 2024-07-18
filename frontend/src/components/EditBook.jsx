import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updateBook, getDetail } from '../lib/api/book';
import BookForm from './BookForm';

function EditBook() {
  const [value, setValue] = useState({});
  const query = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchData(query.id);
  }, [query]);

  const fetchData = async (id) => {
    try {
      const response = await getDetail(id);
      setValue(response.data);
    } catch (error) {
      console.error('Error fetching book details:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateBook(query.id, value);
      navigate('/');
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };

  return (
    <div className="container">
      <h1>Edit Book</h1>
      <BookForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        value={value}
        buttonType="Update Book"
      />
    </div>
  );
}

export default EditBook;
