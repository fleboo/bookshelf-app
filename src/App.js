import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import HomeLayout from './components/HomeLayout/HomeLayout';
import Search from './components/Search/Search';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Route exact path={"/"} component={HomeLayout} />
        <Route exact path={"/search"} component={Search} />
      </div>
    );
  }
}

export default App;

