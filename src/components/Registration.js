import React, { Component } from 'react';
import request from 'superagent';
const ROOT_URL = 'http://localhost:8080';



class Registration extends Component {

	 constructor(props){
    super(props);
    this.state={
    	username:'',
    	password:'',
    	age:'',
    	phoneno:'',
    	emailId:'',
    	gender:''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitEvent = this.handleSubmitEvent.bind(this);
  }
  handleSubmitEvent(e){
  	e.preventDefault();
  	let change={}
  	change[e.target.name]=e.target.value
  	this.setState(change);
  }

  	 handleSubmit(event) {
		event.preventDefault();
		console.log('handleSubmit event called',event.target.username);
		const data = new FormData(event.target);
		console.log(data);
		let jsondata={
			"userName":this.state.username,
			"password":this.state.password,
			"age":this.state.age,
			"phoneno":this.state.phoneno,
			"emailId":this.state.emailId,
			"gender":this.state.gender
		}
		console.log(jsondata)
		request
		.post('http://localhost:8080/SignUp')
		.send(jsondata)
		.set('Content-Type', 'application/json')
		 .then(function(res) {
	      console.log('Response:' + JSON.stringify(res.body));
	      alert("Registration Sucessfull");

	   });
		/*fetch('http://localhost:8080/SignUp', {
		  method: 'POST',
		  body: data,
			},{
				'Content-type':'application/json'
			}).then(function(responseJsonData){
				console.log(responseJsonData);
			});*/
  }

  render() {
    return (	
    			<form onSubmit={this.handleSubmit}>
    	        <div className="form-inline">
		        <h2>SignUp</h2>
		        <div className="form-group">
		        <input className="form-control" type="text" placeholder="UserName" name="username" value={this.state.username} onChange={this.handleSubmitEvent} requried/><br />
		        <input className="form-control" type="password" placeholder="password" name="password" value={this.state.password} onChange={this.handleSubmitEvent}/><br />
		        <input className="form-control" type="text" placeholder="Age" name="age" value={this.state.age} onChange={this.handleSubmitEvent}/><br />
		        <input className="form-control" type="text" placeholder="phoneNo" name="phoneNo" value={this.state.phoneNo} onChange={this.handleSubmitEvent}/><br />
		        <input className="form-control" type="text" placeholder="emailId" name="emailId" value={this.state.emailId}  onChange={this.handleSubmitEvent}/><br />
		        <input className="form-control" type="text" placeholder="gender" name="gender" value={this.state.gender} onChange={this.handleSubmitEvent}/><br />
		        <button className="btn btn-primary" type="submit">SignUp</button>
		        </div>
		      </div>
		      </form>
    		);
  }
}

export default  Registration;
