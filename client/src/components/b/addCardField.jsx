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
  	}
  	handleCardNameChange(e){
     this.setState({nameOfCard: e.target.value});
  }
  render() {
    return (
      	<div className="add-card-field" >
          	<input type="text" value={this.state.nameOfCard} onChange={this.handleCardNameChange}/>
          	<button onClick={()=>this.props.onAddCard(this.state.nameOfCard, this.props.listName)}>OK</button>
       	</div>
    );
  }
}

export default connect(
     state => ({
       myStore: state
     }),
     dispatch => ({

        onAddCard: (cn, ln)=> {
          dispatch(sendCardToServer({cardName : cn, listName:ln}));
       }
     })
     )(AddCardField);