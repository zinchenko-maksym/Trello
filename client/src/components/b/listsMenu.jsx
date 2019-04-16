import React, { Component } from 'react';
import {connect} from 'react-redux';
import List from './list';
import AddList from './addList';
import {requestCardsAndLists} from '../../action'
class ListMenu extends Component {
	constructor(props){
		super();
		this.returnLists=this.returnLists.bind(this);

	}
  componentDidMount(){
    
    this.props.onRequestLists()
  }
	returnLists(){
		let listsArr=this.props.myStore.lists

		let arr= listsArr.map((list)=>{
     
      return <List key={list._id} id={list._id}  name={list.listName}/>})
      
		return arr
	}
  	render() {
    	return (
      	<div className="lists-menu">
          {this.returnLists()}
        	<AddList/>
      	</div>
    	);
  	}
}

export default connect(
     state => ({
     	myStore: state
     }),
     dispatch => ({
       onRequestLists: ()=>{
         dispatch(requestCardsAndLists())
         
       }
     })
     )(ListMenu);
