import React, { Component } from 'react';
import {connect} from 'react-redux';
import Card from './card';
import DeleteListButton from './deleteListButton';
import AddCardField from './addCardField';
import {sendCardToServer, deleteCardRequest, addCard, deleteCard} from '../../action'

import HTML5Backend from "react-dnd-html5-backend";
import { DropTarget } from 'react-dnd';

const targetReact = {

  canDrop(props, monitor, component) {
    
    const item = monitor.getItem() 
    return true
  },

  hover(props, monitor, component) {

    const item = monitor.getItem();
    if(item.listId!==props.id){
      component.moveCardToAnotherList({_id: item.id, cardName: item.name}, props.id, item.listId);
      item.listId=props.id;
      console.log('1', item)
      item.index=props.cards.length-1
      console.log('2', item)
    }
    
  },

  drop(props, monitor, component) {
    const { id, name, index } = props;
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
      this.addCardMenu=this.addCardMenu.bind(this);
      this.changeAddCardMenu=this.changeAddCardMenu.bind(this);
      this.dropCard=this.dropCard.bind(this);
      this.returnCards=this.returnCards.bind(this);
      this.moveCardToAnotherList=this.moveCardToAnotherList.bind(this);
  	}


    moveCardToAnotherList(card, targetListId, sourceListId){
        this.props.onMoveCardToAnotherList(card, targetListId, sourceListId)
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

       onMoveCardToAnotherList: (card, targetListId, sourceListId)=> {
         console.log('onMoveCardToAnotherList')
          dispatch(addCard({card : card, listId: targetListId}));
          dispatch(deleteCard({cardId : card._id, listId: sourceListId}));
       },
       onMoveCard: (card, sourceList, targetList)=> {
          dispatch(sendCardToServer({cardName : card.name, listId: targetList}));
          dispatch(deleteCardRequest({cardId: card.id, listId: sourceList}));
       }
     })
)(List);
