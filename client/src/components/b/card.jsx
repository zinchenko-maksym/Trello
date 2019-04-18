import React, { Component } from 'react';


class Card extends Component {
	cutCardName(name) {
      if(name.length>10){
        return name.slice(0, 24).concat("...")
      }
      return name
    }
  render() {
  	
    return (
      <div className="list__item card">
      	{this.cutCardName(this.props.name)}
      </div>
    );
  }
}

export default Card;
