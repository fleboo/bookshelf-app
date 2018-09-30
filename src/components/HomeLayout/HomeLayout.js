import React from 'react';

import Title from '../Title/Title';
import BooksContent from '../../containers/BooksContent';

const homeLayout = (props) => (
  <div className="list-books">
    <Title />
    <BooksContent
      books={props.books}
      moveBook={props.moveBook} />
  </div>
);

export default homeLayout;