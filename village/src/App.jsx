import React, { Component } from 'react';
import axios from 'axios';
import { NavLink, Route } from 'react-router-dom';


import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import NavComponent from './components/NavComponent'
const baseUrl = 'http://localhost:3333';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
      smurfs: [],
      isOpen: false
		};
  }
  //nav toggle
  toggle = () => {
    this.setState({isOpen: !this.state.isOpen})
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

  //delete
  deleteItem = (e, itemId) => {
    e.preventDefault();
    axios
      .delete(`${baseUrl}/items/${itemId}`)
      .then(res => {
        this.setState({ smurfs: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

	render() {
		return (
			<div className="App">
        <NavComponent/>
				<Route exact path="/" render={props => (<Smurfs {...props} smurfs={this.state.smurfs}/>)} />
				<Route path="/add" deleteItem={this.deleteItem} smurf={this.state.smurfs} component={SmurfForm} />
			</div>
		);
	}
}

export default App;
