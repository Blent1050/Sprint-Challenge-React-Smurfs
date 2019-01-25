import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
const baseUrl = 'http://localhost:3333';

const SmurfForm = props => {
  console.log(props)
  function handleSubmit() {
    if (props.isUpdating) {
      console.log('updating true')
      props.updateSmurf();
    } else {
      console.log('updating false')
      props.addSmurf();
    }
  }

		return (
			<Form  className="smurf-form">
				<h1>Create a new Smurf!</h1>
				<Row form>
					<Col md={12}>
						<FormGroup>
							<Label for="name">Name</Label>
							<Input
								onChange={props.handleInputChange}
								value={props.smurf.newSmurf.name}
								type="text"
								name="name"
								id="name"
								placeholder="Hefty Smurf"
							/>
						</FormGroup>
					</Col>
					<Col md={12}>
						<FormGroup>
							<Label for="age">Age</Label>
							<Input
								onChange={props.handleInputChange}
								value={props.smurf.newSmurf.age}
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
								onChange={props.handleInputChange}
								value={props.smurf.newSmurf.height}
								type="text"
								name="height"
								id="height"
								placeholder="15cm"
							/>
						</FormGroup>
					</Col>
				</Row>
				<Button onClick={handleSubmit}>Submit</Button>
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

export default SmurfForm;
