import React, { Component } from 'react';
import axios from 'axios';
import { NavLink, Route } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink as NavigationLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
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

	render() {
		return (
			<div className="App">
      <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavigationLink to="/components/">Components</NavigationLink>
              </NavItem>
              <NavItem>
                <NavigationLink to="https://github.com/reactstrap/reactstrap">GitHub</NavigationLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
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
