import React, { Component } from 'react';
import axios from 'axios';

const baseUrl = 'http://localhost:3333';


class SmurfForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
      newSmurf: {
        name: '',
        age: '',
        height: ''
      }
		};
	}
	//Create
	addSmurf = (event) => {
    event.preventDefault();
    console.log(this.state.newSmurf)
		axios
      .post(`${baseUrl}/smurfs`, this.state.newSmurf)
			.then((res) => {
        console.log(res);
				this.setState({
          newSmurf: res.data
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};

	handleInputChange = (e) => {
    e.persist();
		this.setState(prevState => {
      return{
        newSmurf:{
          ...prevState.newSmurf,
          [e.target.name]: e.target.value
        }
      }
    });
    console.log(e.target.value)
	};

	render() {
		return (
			<div className="SmurfForm">
				<form onSubmit={this.addSmurf}>
					<input onChange={this.handleInputChange} placeholder="name" value={this.state.name} name="name" />
					<input onChange={this.handleInputChange} placeholder="age" value={this.state.age} name="age" />
					<input
						onChange={this.handleInputChange}
						placeholder="height"
						value={this.state.height}
						name="height"
					/>
					<button type="submit"> Add to the village </button>{' '}
				</form>{' '}
			</div>
		);
	}
}

export default SmurfForm;
