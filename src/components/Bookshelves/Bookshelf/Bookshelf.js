import React from 'react';

import Book from '../../Book/Book';

const bookshelf = (props) => (
  <div>
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.books && 
            props.books.map(book => <Book 
            moveBook={props.moveBook} 
            book={book} 
            key={book.id} 
            {...book} />)}
        </ol>
      </div>
    </div>
  </div>
);

export default bookshelf; 