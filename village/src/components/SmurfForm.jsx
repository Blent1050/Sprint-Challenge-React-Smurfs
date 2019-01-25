import React, { Component } from 'react';
import axios from 'axios';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
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
		console.log(this.state.newSmurf);
		axios
			.post(`${baseUrl}/smurfs`, this.state.newSmurf)
			.then((res) => {
				console.log(res);
				this.setState({
					newSmurf: res.data
        });
        this.props.history.push("/");
			})
			.catch((err) => {
				console.log(err);
			});
	};

	handleInputChange = (e) => {
		e.persist();
		this.setState((prevState) => {
			return {
				newSmurf: {
					...prevState.newSmurf,
					[e.target.name]: e.target.value
				}
			};
		});
		console.log(e.target.value);
	};

	render() {
		return (
			<Form onSubmit={this.addSmurf} className="smurf-form">
				<h1>Create a new Smurf!</h1>
				<Row form>
					<Col md={12}>
						<FormGroup>
							<Label for="exampleName">Name</Label>
							<Input
								onChange={this.handleInputChange}
								value={this.state.name}
								type="text"
								name="name"
								id="exampleName"
								placeholder="Hefty Smurf"
							/>
						</FormGroup>
					</Col>
					<Col md={12}>
						<FormGroup>
							<Label for="age">Age</Label>
							<Input
								onChange={this.handleInputChange}
								value={this.state.age}
								type="text"
								name="age"
								id="age"
								placeholder="205"
							/>
						</FormGroup>
					</Col>
					<Col md={12}>
						<FormGroup>
							<Label for="height">Height</Label>
							<Input
								onChange={this.handleInputChange}
								value={this.state.height}
								type="text"
								name="height"
								id="height"
								placeholder="15cm"
							/>
						</FormGroup>
					</Col>
				</Row>
				<Button type="submit">Submit</Button>
			</Form>
		);
	}
	// 	<div className="SmurfForm">
	// 		<form onSubmit={this.addSmurf}>
	// 			<input onChange={this.handleInputChange}  value={this.state.name} placeholder="name" name="name" />
	// 			<input onChange={this.handleInputChange} placeholder="age" value={this.state.age} name="age" />
	// 			<input
	// 				onChange={this.handleInputChange}
	// 				placeholder="height"
	// 				value={this.state.height}
	// 				name="height"
	// 			/>
	// 			<button type="submit"> Add to the village </button>{' '}
	// 		</form>{' '}
	// 	</div>
	// );
}

export default SmurfForm;
