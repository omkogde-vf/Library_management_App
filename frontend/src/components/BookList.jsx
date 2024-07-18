import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { deleteBook, getList } from '../lib/api/book';

function BookList() {
  const [dataList, setDataList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchList();
  }, []);

  const fetchList = async () => {
    try {
      const response = await getList();
      setDataList(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleDelete = async (item) => {
    try {
      await deleteBook(item.id);
      setDataList((prevDataList) => prevDataList.filter((dataItem) => dataItem.id !== item.id));
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <div className="container">
      <h1>Books</h1>
      <button className="btn btn-primary" onClick={() => navigate('/new')}>
        Add Book
      </button>
      <div className="card-deck mt-3">
        {dataList.map((item) => (
          <div className="card mb-3" style={{ width: '18rem' }} key={item.id}>
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <h6 className="card-text text-muted">Author: {item.author}</h6>
              <p className="card-text">{item.description}</p>
              <p className="card-text text-muted">Publication Date: {item.publicationDate}</p>
              <Link to={`/edit/${item.id}`} className="btn btn-primary me-2">
                Edit
              </Link>
              <button className="btn btn-danger" onClick={() => handleDelete(item)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookList;
