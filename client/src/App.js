import React, { Component } from 'react';

import './App.css';
import MainPage from './components/main/';
import BoardsPage from './components/b/';
import {BrowserRouter, Route} from 'react-router-dom';
import './styles/style.sass'


class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <div className="App">
        <Route path='/main' component={MainPage}/>
        <Route path='/b/:id' component={BoardsPage}/>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
