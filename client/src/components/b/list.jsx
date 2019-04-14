import React, { Component } from 'react';
import {connect} from 'react-redux';
import Card from './card';
import AddCardField from './addCardField';
class List extends Component {
	constructor(props)  {
    	super();
      this.state={
        addingCard: false

      }
      this.addCardMenu=this.addCardMenu.bind(this)
      this.changeAddCardMenu=this.changeAddCardMenu.bind(this)
      this.returnCards=this.returnCards.bind(this)
  	}
    changeAddCardMenu(){

      
      this.setState({
              addingCard: !this.state.addingCard
            })
    }
    returnCards(){
 
      let cardsArr=this.props.myStore.cards
      
      let arr=[];
      for (var i = 0; i <=cardsArr.length - 1; i++) {
        if(this.props.name===cardsArr[i].listName){
          arr.push(<Card key={cardsArr[i].cardName}  name={cardsArr[i].cardName}/>)
        }
      }
      return arr
    }
    addCardMenu(){
      if(this.state.addingCard){
        return <div className="add-card" onClick={this.changeAddCardMenu}>asddf</div>
      }
      else
      {
        return <AddCardField listName={this.props.name}/>
      }
    }
  render() {
    return (
  	    <div className="lists-menu__item list">
  	    	<h3 className="list__title list__item">{this.props.name}</h3>
          {this.returnCards()}
          {this.addCardMenu()}
  	    </div>
        
      
    );
  }
}


export default connect(
     state => ({
       myStore: state
     }),
     dispatch => ({
 
     })
     )(List);
