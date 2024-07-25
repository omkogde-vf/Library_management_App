import client from './client';

export const getList = () => client.get('/books');

export const getDetail = (id) => client.get(`/books/${id}`);

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

export const updateBook = (id, params) => client.put(`/books/${id}`, params);

export const deleteBook = (id) => client.delete(`/books/${id}`);
