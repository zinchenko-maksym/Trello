import React, { Component } from 'react';
import {connect} from 'react-redux';
import {deleteList} from '../../action'
class DeleteListButton extends Component {
	
  render() {
    
    return (
	    <div  className="delete-list" onClick={()=>{this.props.onDeleteList(this.props.listId)}}>
	      X
      </div>
    );
  }
}

export default connect(
     state => ({
       myStore: state
     }),
     dispatch => ({
        onDeleteList: (res)=> {

          dispatch(deleteList({id: res}));
       }
     })
     )(DeleteListButton);

