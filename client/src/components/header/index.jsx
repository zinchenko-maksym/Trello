import React, { Component } from 'react';
import {connect} from 'react-redux';

/*import LoginForm from './loginForm';*/

class ListsPage extends Component {
	render() {
		
		return (
	  	<div className="header">
			{/*<LoginForm/>
			{this.props.myStore.auth.authStatus}
			<a href="http://localhost:3000/boards" className="sign-up">Sign up</a>*/}
	  		{ localStorage.getItem("userName")}
	  	</div>
		);
  	}
}

export default connect(
    state => ({
     	myStore: state
    })
)(ListsPage);
