import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { deleteBook, getList } from '../lib/api/book';
import './BookList.css'; // Import your CSS file here

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
    <div className="booklist-container">
      <div className="header-container">
        <h1 className="booklist-heading">Books List</h1>
        <button className="btn-primary" onClick={() => navigate('/new')}>
          Add Book
        </button>
      </div>
      <div className="table-responsive mt-3">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>Description</th>
              <th>Publication Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {dataList.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>{item.description}</td>
                <td>{item.publicationDate}</td>
                <td>
                  <Link to={`/edit/${item.id}`} className="btn btn-primary me-2">
                    Edit
                  </Link>
                  <button className="btn btn-danger" onClick={() => handleDelete(item)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BookList;
