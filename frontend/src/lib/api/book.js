import client from './client';

// Fetch list of books
export const getList = () => {
  return client.get('/books');
};

// Fetch details of a single book
export const getDetail = (id) => {
  return client.get(`/books/${id}`);
};


export const createBook = async (params) => {
  try {
    const response = await client.post('/books', params);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      throw new Error("Unauthorized: Please log in to add a book.");
    }
    throw error;
  }
};


// Update an existing book
export const updateBook = (id, params) => {
  return client.put(`/books/${id}`, params);
};

// Delete a book
export const deleteBook = (id) => {
  return client.delete(`/books/${id}`);
};
