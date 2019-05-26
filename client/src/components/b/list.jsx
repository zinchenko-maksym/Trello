import React, { Component } from 'react';
import {connect} from 'react-redux';
import Card from './card';
import DeleteListButton from './deleteListButton';
import AddCardField from './addCardField';
import Preview from './preview';
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
    
    /*const clientOffset = monitor.getClientOffset()
    const componentRect = findDOMNode(component).getBoundingClientRect()

    // You can check whether we're over a nested drop target
    const isJustOverThisOne = monitor.isOver({ shallow: true })

    // You will receive hover() even for items for which canDrop() is false
    const canDrop = monitor.canDrop()*/
  },

  drop(props, monitor, component) {
    
    console.log(props, monitor, component, 3);
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
      this.returnPreview=this.returnPreview.bind(this)
  	}

    changeAddCardMenu(){
      this.setState({
              addingCard: !this.state.addingCard
            })
    }
    dropCard(card, listId){
      this.props.onDeleteCard(card.id)
      this.props.onAddCard(card.name, listId)
    }
    returnPreview(){
      let cardsArr=this.props.cards
      let arr=cardsArr.map((card)=>
        {  
          return <Preview key={card._id} id={card._id}  name={card.cardName}/>
          return null
        }
        )
      
      return arr
    }
    returnCards(){

      let cardsArr=this.props.myStore.cards
      let arr=cardsArr.map((card)=>
        {  
          
          if(card.listId===this.props.id)

          {return <Card key={card._id}  name={card.cardName}/>}
          return null
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
          
          
          {this.addCardMenu()}
          {this.returnPreview()}
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
       onDeleteCard: (card)=> {

          dispatch(deleteCardRequest({cardId: card}));
       },
        onAddCard: (cn, id)=> {
          console.log(cn, id)
          dispatch(sendCardToServer({cardName : cn, listId:id}));
        }
     })
     )(List);
