import React, { Component } from 'react';


class Board extends Component {
	constructor(props)  {
    	super();
  	}

  render() {
    return (
	    <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md" className="boards-list__item board">
	    	 {this.props.name}
	    </a>
    );
  }
}

export default Board;
