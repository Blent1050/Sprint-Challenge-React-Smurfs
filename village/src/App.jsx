import React, { Component } from 'react';
import axios from 'axios';
import { NavLink, Route } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import NavComponent from './components/NavComponent';
const baseUrl = 'http://localhost:3333';
const clearedItem = {
	name: '',
	age: '',
	email: ''
};
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			smurfs: [],
			newSmurf: clearedItem,
			isOpen: false,
			isUpdating: false
		};
	}
	//nav toggle
	toggle = () => {
		this.setState({ isOpen: !this.state.isOpen });
	};
	//Get
	componentDidMount() {
		axios
			.get(`${baseUrl}/smurfs`)
			.then((res) => {
				this.setState({ smurfs: res.data });
				console.log(res.data);
			})
			.catch((err) => console.log(err));
	}

	//Create
	addSmurf = () => {
		axios
			.post(`${baseUrl}/smurfs`, this.state.newSmurf)
			.then((res) => {
				console.log(res);
				this.setState({
					smurfs: res.data
				});
				this.props.history.push('/');
			})
			.catch((err) => {
				console.log(err);
			});
	};

	//delete
	deleteSmurf = (e, itemId) => {
		axios
			.delete(`${baseUrl}/smurfs/${itemId}`)
			.then((res) => {
				this.setState({ smurfs: res.data });
			})
			.catch((err) => {
				console.log(err);
			});
	};
	//Update
	populateForm = (e, id) => {
		e.preventDefault();
		this.setState({
			newSmurf: this.state.smurfs.find((smurf) => smurf.id === id),
			isUpdating: true
		});
		this.props.history.push(`/add/`);
	};

	updateSmurf = () => {
		axios
			.put(`${baseUrl}/smurfs/${this.state.newSmurf.id}`, this.state.newSmurf)
			.then((res) => {
				this.setState({
					smurfs: res.data,
					isUpdating: false,
					newSmurf: clearedItem
				});
				this.props.history.push('/');
			})
			.catch((err) => {
				console.log(err);
			});
	};

	//handle input
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
	};

	render() {
		return (
			<div className="App">	
      
				<NavComponent />
        
				<Route
					exact
					path="/"
					render={(props) => (
						<Smurfs
							{...props}
							populateForm={this.populateForm}
							deleteSmurf={this.deleteSmurf}
							smurfs={this.state.smurfs}
						/>
					)}
				/>

				<Route
					path="/add"
					render={(props) => (
						<SmurfForm
							{...props}
							isUpdating={this.state.isUpdating}
							updateSmurf={this.updateSmurf}
							handleInputChange={this.handleInputChange}
							addSmurf={this.addSmurf}
							smurf={this.state}
						/>
					)}
				/>
        
			</div>
		);
	}
}

export default App;
