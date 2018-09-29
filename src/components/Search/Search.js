import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Book from '../Book/Book';

class Search extends Component {
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search" >Close</Link> 
          <div className="search-books-input-wrapper">
            <input 
              type="text" 
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={this.bookSearchHandler} />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.results.length > 0 && this.state.results.map((book) => (
              <Book 
                moveBook={this.changeShelfHandler} 
                book={book}
                key={book.id}
                {...book} />
            ))}
            {this.state.results.length <= 0 && 
              <h2>No matching books</h2>}
          </ol>
        </div>
      </div>

    );
  }
}

export default Search;