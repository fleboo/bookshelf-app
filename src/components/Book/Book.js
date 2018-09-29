import React from 'react';

const book = (props) => (
  <li>
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${props.imageLinks ? props.imageLinks.thumbnail : ''})` }}></div>
        <div className="book-shelf-changer">
          <select value={props.book.shelf ? props.book.shelf : 'none'} onChange={(event) => props.moveBook(event, props.book)} >
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{props.title}</div>
      <div className="book-authors">{props.authors ? props.authors : 'No author'}</div>
    </div>
  </li>
);

export default book;