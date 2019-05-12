import React, { Component } from 'react';


class Board extends Component {
	constructor(props)  {
    	super();
      
      this.cutBoardName=this.cutBoardName.bind(this);
  	}
    cutBoardName(name) {
      if(name.length>10){
        return name.slice(0, 14).concat("...")
      }
      return name
    }
  render() {

    return (
	    <a href={`http://localhost:3000/b/${this.props.id}`} className="boards-menu__item board">
	    	 {this.cutBoardName(this.props.name)}
	    </a>
    );
  }
}

export default Board;
