import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { getAll, update } from '../BooksAPI';
import Aux from '../hoc/Aux/Aux';
import Bookshelves from '../components/Bookshelves/Bookshelves';

class BooksContent extends Component {
  state = {
    books: []
  }

  // Get Books from API after the DOM mounts  
  componentDidMount() {
    getAll().then((data) => {
      const books = data;

      this.setState({books});
    }).catch(error => console.log(error));
  }

  // Function to handle changing books in shelves
  shelfChangeHandler = (event, bookUpdate) => {
    const shelf = event.target.value;

    update(bookUpdate, shelf).then((res) => {
      console.log('[UPDATE Response]', res);

      bookUpdate.shelf = shelf;
      let updatedBooks = this.state.books.filter((book) => book.id !== bookUpdate.id)
      updatedBooks.push(bookUpdate);
      
      this.setState({books: updatedBooks});
    })
  }

  render() {
    return (
      <Aux>
        <Bookshelves
          moveBook={this.shelfChangeHandler} 
          allBooks={this.state.books} />
        <div className="open-search">
          <Link to="/search">About</Link>
        </div>
      </Aux>
    )
  }
}

export default BooksContent;