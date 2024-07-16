import React from 'react'

function Books(props) {
  return (
    <div>
       <h1>These books are from API</h1>
       {props.books.map((book) =>{
           return (<div key={book.id}>
                    <h2>{book.title}</h2>
                    <h3>{book.author}</h3>
                    <p>{book.description}</p>
                    <p>Published on: {book.published_at}</p>
                  </div>
           );

       })}
    </div>
  );
}

export default Books
