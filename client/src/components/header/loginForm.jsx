import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchLogin} from '../../action'


class LoginForm extends Component {
	constructor(props){
		super();
		this.state= {
        	email: "",
        	password: ""
      	};

		this.sendAuthData=this.sendAuthData.bind(this);
		this.handleEmailChange=this.handleEmailChange.bind(this);
		this.handlePasswordChange=this.handlePasswordChange.bind(this);
	}

	handleEmailChange(e){
     	this.setState({email: e.target.value});
  	}
  	handlePasswordChange(e){
     	this.setState({password: e.target.value});
  	}
	sendAuthData(event){
		event.preventDefault();
		this.props.onFetchLogin(this.state.email, this.state.password)
	} 
  	render() {
	    return (
		    <form >
		    	<input  placeholder="Email" type="text" value={this.state.email} onChange={this.handleEmailChange}/>
		    	<input placeholder="Password" type="password" value={this.state.password} onChange={this.handlePasswordChange}/>
		    	<button onClick={this.sendAuthData}>OK</button>
		    	<a href="http://localhost:3000/main">Sign up</a>
		    </form>
	    );
	}
}

export default connect(
     state => ({
     	myStore: state
     }),
     dispatch => ({
       onFetchLogin: (em, ps)=>{
         dispatch(fetchLogin({
         	email: em,
         	password: ps
         }))
         
       }
     })
     )(LoginForm);
