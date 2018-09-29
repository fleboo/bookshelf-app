import React, { Component } from 'react';

import Bookshelf from './Bookshelf/Bookshelf';

class Bookshelves extends Component {

  render() {

    return (
      <div className="list-books-content">
        <div>
          <Bookshelf 
            allBooks={this.props.allBooks}
            title="Currently Reading" 
            moveBook={this.props.moveBook} 
            books={this.props.allBooks.filter( (book) => book.shelf === 'currentlyReading')} />
          <Bookshelf
            allBooks={this.props.allBooks}
            title="Want to Read" 
            moveBook={this.props.moveBook}  
            books={this.props.allBooks.filter( (book) => book.shelf === 'wantToRead')} />
          <Bookshelf
            allBooks={this.props.allBooks}
            title="Read" 
            moveBook={this.props.moveBook}  
            books={this.props.allBooks.filter( (book) => book.shelf === 'read')} />
        </div>
      </div>
    );
  }
}

export default Bookshelves;