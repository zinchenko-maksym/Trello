import React, { Component } from 'react';
import {connect} from 'react-redux';
import List from './list';
import AddList from './addList';
import {requestBoardsList} from '../../action'
class ListMenu extends Component {
	constructor(props){
		super();
		this.returnLists=this.returnLists.bind(this);

	}
  componentDidMount(){
    this.props.onRequestLists()
  }
	returnLists(){
		let listsArr=this.props.myStore.boards
		let arr=[];
		for (var i = 0; i <=listsArr.length - 1; i++) {
			arr.push(<List key={listsArr[i].boardName} name={listsArr[i].boardName}/>)
		}
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
         dispatch(requestBoardsList())
       }
     })
     )(ListMenu);
