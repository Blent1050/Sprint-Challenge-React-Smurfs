import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavLink as BootstrapNav,
	NavItem,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from 'reactstrap';

export default class NavComponent extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	render() {
		return (
			<div>
				<Navbar color="light" light expand="md">
          <NavbarBrand><Link to='/'>Smurf Village</Link></NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<BootstrapNav>
									<NavLink to="/">Home</NavLink>
								</BootstrapNav>
							</NavItem>
							<NavItem>
								<BootstrapNav>
									<NavLink to="/add">Add Smurf</NavLink>
								</BootstrapNav>
							</NavItem>
							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle nav caret>
									Account
								</DropdownToggle>
								<DropdownMenu right>
									<DropdownItem>Login</DropdownItem>
									<DropdownItem>Sign Out/DropdownItem></DropdownItem>
									<DropdownItem divider />
									<DropdownItem>Remove All Smurfs</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}
