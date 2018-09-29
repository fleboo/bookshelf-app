import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { search, update } from '../../BooksAPI';
import Book from '../Book/Book';

class Search extends Component {
  state = {
    results: [],
    books:[],
    query: ''
  }
  // Function to handle book searches
  bookSearchHandler = (event) => {
    event.preventDefault();
    const query = event.target.value;
    this.setState({query});


    if(query.trim()) {
      search(query).then((bookResults) => {
        if (bookResults.error) {
          console.log(bookResults.error);
          this.setState({results: []});
        } else {
          this.setState({results: bookResults});
          this.matchShelfHandler();
        }
      })
    } else {
      this.setState({books: [], results: []});
    }
  }

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