import React, { Component } from 'react';
import {connect} from 'react-redux';
import Card from './card';
import DeleteListButton from './deleteListButton';
import AddCardField from './addCardField';
import HTML5Backend from "react-dnd-html5-backend";
import {sendCardToServer, deleteCardRequest} from '../../action'

import { DropTarget } from 'react-dnd'

import { findDOMNode } from 'react-dom' //can delete

const targetReact = {

  canDrop(props, monitor, component) {
    const item = monitor.getItem() 
    return true
  },

  hover(props, monitor, component) {
    const item = monitor.getItem()
  },

  drop(props, monitor, component) {
    console.log(monitor.getItem())
    component.dropCard(monitor.getItem(), props.id);

    return undefined
  }
}

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver(),
    isOver: monitor.isOver(),
    isOverCurrent: monitor.isOver({ shallow: true }),
    canDrop: monitor.canDrop(),
    itemType: monitor.getItemType(),
    item: monitor.getItem(),
  }
}



class List extends Component {
	constructor(props)  {
    	super();
      this.state={
        addingCard: false
      }
      this.addCardMenu=this.addCardMenu.bind(this)
      this.changeAddCardMenu=this.changeAddCardMenu.bind(this)
      this.dropCard=this.dropCard.bind(this)
      this.returnCards=this.returnCards.bind(this)
  	}

    changeAddCardMenu(){
      this.setState({
              addingCard: !this.state.addingCard
            })
    }
    dropCard(card, listId){
      this.props.onMoveCard(card, card.listId , listId);
    }
    returnCards(){
      let cardsArr=this.props.cards
      let arr=cardsArr.map((card, i)=>
        {  
          return <Card key={card._id} index={i} listId={this.props.id} id={card._id}  name={card.cardName}/>
        }
        )
      
      return arr
    }
    addCardMenu(){
      if(this.state.addingCard){
        return <div className="add-card" onClick={this.changeAddCardMenu}>Add Card</div>
      }
      else
      {
        return <AddCardField listId={this.props.id}/>
      }
    }
    moveItem(){
      console.log("delete item")
    }
  render() {
    const { isOver, canDrop, connectDropTarget } = this.props;
    const backgroundColor = isOver ? 'lightgreen' : 'green'
    return connectDropTarget(
  	    <div className="lists-menu__item list" style={{background: backgroundColor}}>
  	    	<h3 className=" list__item">
            <p className="list-title">{this.props.name}</p>
            <DeleteListButton listId={this.props.id}/>
          </h3>
          
          {this.returnCards()}
          {this.addCardMenu()}
          
  	    </div>
        
      
    );
  }
}


List = DropTarget('card', targetReact, collect)(List);
export default connect(
     state => ({
       myStore: state
     }),
     dispatch => ({
       onMoveCard: (card, sourceList, targetList)=> {
          dispatch(sendCardToServer({cardName : card.name, listId: targetList}));
          dispatch(deleteCardRequest({cardId: card.id, listId: sourceList}));
       }
     })
)(List);
