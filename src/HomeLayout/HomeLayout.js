import React, { Component } from 'react';

import Title from '../Title/Title';
import BooksContent from '../../containers/BooksContent';

class HomeLayout extends Component {
  render() {
    return (
      <div className="list-books">
        <Title />
        <BooksContent />
      </div>
    )
  }
}

export default HomeLayout;