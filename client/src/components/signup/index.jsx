import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchSignUp} from '../../action'


class SignUp extends Component {
	constructor(props){
		super();
		this.state= {
					name: "",
					email: "",
					password: ""
				};
		this.handleChange=this.handleChange.bind(this);
		this.handleSubmit=this.handleSubmit.bind(this);
	}
	
	handleSubmit(e) {
		e.preventDefault();
		this.props.onFetchSignUp(this.state)
	}
	handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;
        this.setState({
          [name]: value
        });

    }
	render() {
		return (
			<div className="Signup">
				Create account or 
			<a href="http://localhost:3000/login"> log in</a>  {/*change adress*/}
				<form onSubmit={this.handleSubmit}>
					<div>Name</div>
					<input type="text" name="name" onChange={this.handleChange}/>
					<div>Email</div>
					<input type="text" name="email" onChange={this.handleChange}/>
					<div>Password</div>
					<input type="text" name="password" onChange={this.handleChange}/>
					<button >Create new account</button>
				</form>
			</div>
		);
	}
}

export default connect(
		 state => ({
			 myStore: state
		 }),
		 dispatch => ({
			 onFetchSignUp: (data)=>{
				 dispatch(fetchSignUp({
				 	name: data.name,
					 email: data.email,
					 password: data.password
				 }))
				 
			 }
		 })
		 )(SignUp);
