import React, { Component } from 'react';
import {connect} from 'react-redux';
import Card from './card';
import DeleteListButton from './deleteListButton';
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
  render() {
    
    return (
  	    <div className="lists-menu__item list">
  	    	<h3 className="list__title list__item">
            {this.props.name}
            <DeleteListButton listId={this.props.id}/>
          </h3>
          
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
