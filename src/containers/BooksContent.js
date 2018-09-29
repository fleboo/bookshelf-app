import React, { Component } from 'react';

import Aux from '../hoc/Aux/Aux';
import Bookshelves from '';

class BooksContent extends Component {
  state = {
    books: []
  }

  render() {
    return (
      <Aux>
        <Bookshelves
          moveBook={this.shelfChangeHandler} 
          allBooks={this.state.books} />
      </Aux>
    )
  }
}

export default BooksContent;