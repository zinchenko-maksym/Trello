import React, { Component } from 'react';


class Card extends Component {
  render() {
    return (
      <div className="list__item card">
      	{this.props.name}
      </div>
    );
  }
}

export default Card;
