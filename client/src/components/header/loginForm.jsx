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
		this.formReturn=this.formReturn.bind(this);
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
	formReturn(){
		console.log(this.props.myStore.auth)
		if(!this.props.myStore.auth.isAuthorized){
			return(
				<form>
		    		<input  placeholder="Email" type="text" value={this.state.email} onChange={this.handleEmailChange}/>
		    		<input placeholder="Password" type="password" value={this.state.password} onChange={this.handlePasswordChange}/>
		    		<button onClick={this.sendAuthData}>OK</button>
		    	</form>
			)
		}else{
			return (
					<form>
		    		
		    		<a href="http://localhost:3000/boards">Log out</a>
		    	</form>
				)
		}

	}
  	render() {
	    return (<>
		    	{this.formReturn()}
		    </>
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
