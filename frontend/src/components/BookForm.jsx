function BookForm({ handleChange, handleSubmit, value, buttonType }) {
  return (
    <form className="container mt-4 p-0" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title:
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          onChange={handleChange}
          value={value.title || ''}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="author" className="form-label">
          Author:
        </label>
        <input
          type="text"
          className="form-control"
          id="author"
          name="author"
          onChange={handleChange}
          value={value.author || ''}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description:
        </label>
        <textarea
          className="form-control"
          id="description"
          name="description"
          onChange={handleChange}
          value={value.description || ''}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="publication_date" className="form-label">
          Publication Date:
        </label>
        <input
          type="date"
          className="form-control"
          id="publication_date"
          name="publication_date"
          onChange={handleChange}
          value={value.publication_date || ''}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        {buttonType}
      </button>
    </form>
  );
}

export default BookForm;
