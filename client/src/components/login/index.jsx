import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchLogIn} from '../../action'


class LogIn extends Component {
	constructor(props){
		super();
		this.state= {
					email: "",
					password: ""
				};
		this.handleChange=this.handleChange.bind(this);
		this.handleSubmit=this.handleSubmit.bind(this);
	}
	
	handleSubmit(e) {
		e.preventDefault();
		this.props.onFetchLogIn(this.state)
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
				Login or 
			<a href="http://localhost:3000/signup"> create account</a>  {/*change adress*/}
				<form onSubmit={this.handleSubmit}>
					<div>Email</div>
					<input type="text" name="email" onChange={this.handleChange}/>
					<div>Password</div>
					<input type="text" name="password" onChange={this.handleChange}/>
					<button >Log In</button>
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
			 onFetchLogIn: (data)=>{
				 dispatch(fetchLogIn({
					 email: data.email,
					 password: data.password
				 }))
				 
			 }
		 })
		 )(LogIn);
