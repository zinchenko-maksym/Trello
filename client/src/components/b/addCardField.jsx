import React, { Component } from 'react';
import {connect} from 'react-redux';
import {sendCardToServer} from '../../action'

class AddCardField extends Component {
	constructor(props)  {
   		super();
      	this.state= {
        	nameOfBoard: ""
      	};
      	this.handleCardNameChange=this.handleCardNameChange.bind(this);
  	}
  	handleCardNameChange(e){
     this.setState({nameOfBoard: e.target.value});
  }
  render() {
    return (
      	<div className="add-card-field" >
          	<input type="text" value={this.state.nameOfBoard} onChange={this.handleCardNameChange}/>
          	<button onClick={()=>this.props.onAddCard(this.state.nameOfBoard)}>OK</button>
       	</div>
    );
  }
}

export default connect(
     state => ({
       myStore: state
     }),
     dispatch => ({

        onAddCard: (cn)=> {
          dispatch(sendCardToServer({cardName : cn}));
       }
     })
     )(AddCardField);