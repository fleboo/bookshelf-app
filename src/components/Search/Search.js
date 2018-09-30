import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { search } from '../../BooksAPI';
import Book from '../Book/Book';

class Search extends Component {
  state = {
    results: [],
    query: ''
  }

  // Function to search and update book shelf
  bookSearchHandler = (event) => {
    event.preventDefault();
    const query = event.target.value;
    this.setState({query});

    // This code snippet was provided by Udacity code reviewer
    search(query,30).then((books) => {
      if(!!books){
        if(books.length>0){
          const results = books.map((book) => {
            const existingBook = this.props.books.find((b) => b.id === book.id)
            book.shelf = !!existingBook ? existingBook.shelf : 'none'
            return book
          });
          this.setState({ results })
        }  
      }
    })
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
                moveBook={this.props.moveBook} 
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