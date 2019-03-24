import React, { Component } from 'react';

import BoardsMenu from './boardsMenu';

class MainPage extends Component {
  render() {
    return (
      <div className="main-page">
        <BoardsMenu/>
      </div>
    );
  }
}

export default MainPage;
