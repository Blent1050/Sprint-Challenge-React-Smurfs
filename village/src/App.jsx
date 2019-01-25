import React, { Component } from 'react';
import axios from 'axios';
import { NavLink, Route } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
const baseUrl = 'http://localhost:3333';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			smurfs: []
		};
	}
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

	render() {
		return (
			<div className="App">
				<nav>
					<NavLink to="/">Home</NavLink>
					<NavLink to="/add">Add Smurf</NavLink>
				</nav>
				<Route exact path="/" render={props => (<Smurfs {...props} smurfs={this.state.smurfs}/>)} />
				<Route path="/add" component={SmurfForm} />
			</div>
		);
	}
}

export default App;
