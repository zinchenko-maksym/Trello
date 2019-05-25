import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'


import './App.css';
import './styles/style.sass';
import BoardsPage from './components/boards/';
import ListsPage from './components/b/';
import Header from './components/header/';
import SignUp from './components/signup/';
import LogIn from './components/login/';


class App extends Component {
  render() {
    return (<>
      <Header/>
      <BrowserRouter>
        
        <div className="App">
          <Route path='/boards' component={BoardsPage}/>
          <Route path='/b/:id' component={ListsPage}/>
          <Route path='/signup' component={SignUp}/>
          <Route path='/login' component={LogIn}/>
        </div>
      </BrowserRouter>
    </>
    );
  }
}

export default App;
