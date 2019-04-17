import React, { Component } from 'react';


class Board extends Component {
	constructor(props)  {
    	super();
  	}

  render() {

    return (
	    <a href={`http://localhost:3000/b/${this.props.id}`} className="boards-list__item board">
	    	 {this.props.name}
	    </a>
    );
  }
}

export default Board;
