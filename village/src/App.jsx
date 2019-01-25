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
      newSmurf: {
				name: '',
				age: '',
				height: ''
			},
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

  //Create
	addSmurf = (event) => {
		event.preventDefault();
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
  

  //delete
  deleteSmurf = (e, itemId) => {
    axios
      .delete(`${baseUrl}/smurfs/${itemId}`)
      .then(res => {
        this.setState({ smurfs: res.data });
      })
      .catch(err => {
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
		console.log(e.target.value);
	};

	render() {
		return (
			<div className="App">
        <NavComponent/>
				<Route exact path="/" render={props => (<Smurfs {...props} deleteSmurf={this.deleteSmurf} smurfs={this.state.smurfs}/>)} />
				<Route path="/add" render={props => (<SmurfForm handleInputChange={this.handleInputChange}  addSmurf={this.addSmurf} smurf={this.state.smurfs}/>)}  />
			</div>
		);
	}
}

export default App;
