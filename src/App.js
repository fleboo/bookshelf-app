import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { getAll, update } from './BooksAPI';
import HomeLayout from './components/HomeLayout/HomeLayout';
import Search from './components/Search/Search';
import './App.css';

class App extends Component {
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
      <div className="app">
        <Switch>
          <Route exact path={"/"} render={() => (
            <HomeLayout
              books={this.state.books}
              moveBook={this.shelfChangeHandler} />
          )} />
          <Route exact path={"/search"} render={() => (
            <Search
              books={this.state.books}
              moveBook={this.shelfChangeHandler} />
          )} />
          </Switch>
      </div>
    );
  }
}

export default App;

