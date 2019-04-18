import React, { Component } from 'react';
import {connect} from 'react-redux';
import {sendCardToServer} from '../../action'

class AddCardField extends Component {
	constructor(props)  {
   		super();
      	this.state= {
        	nameOfCard: ""
      	};
      	this.handleCardNameChange=this.handleCardNameChange.bind(this);
        this.addCard=this.addCard.bind(this);
  	}
  handleCardNameChange(e){
    this.setState({nameOfCard: e.target.value});
  }
  addCard(e){
    if(/\S/.exec(this.state.nameOfCard)){
     this.props.onAddCard(this.state.nameOfCard, this.props.listId)
   }
   this.setState({
     nameOfCard: ""
   })
  }

  render() {
    return (
      	<div className="add-card-field" >
          	<input type="text" value={this.state.nameOfCard} onChange={this.handleCardNameChange}/>
          	<button onClick={this.addCard}>OK</button>
       	</div>
    );
  }
}

export default connect(
     state => ({
       myStore: state
     }),
     dispatch => ({

        onAddCard: (cn, id)=> {
          dispatch(sendCardToServer({cardName : cn, listId:id}));
       }
     })
     )(AddCardField);