import React from 'react';
import { Link } from 'react-router-dom';

import Aux from '../hoc/Aux/Aux';
import Bookshelves from '../components/Bookshelves/Bookshelves';

const booksContent = (props) => (
  <Aux>
    <Bookshelves
      moveBook={props.moveBook} 
      allBooks={props.books} />
    <div className="open-search">
      <Link to="/search">About</Link>
    </div>
  </Aux>
);

export default booksContent;