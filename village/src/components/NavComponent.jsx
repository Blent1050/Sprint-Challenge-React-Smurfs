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
				<Navbar color="dark" light expand="md">
					<Link className=" navbar-brand text-primary" to="/">
						Smurf Village
					</Link>

					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink className="text-primary nav-link" to="/">
									Home
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink className="text-primary nav-link" to="/add">
									Add Smurf
								</NavLink>
							</NavItem>
							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle className="text-primary" nav caret>
									Account
								</DropdownToggle>
								<DropdownMenu right>
									<DropdownItem>Login</DropdownItem>
									<DropdownItem>Sign Out/DropdownItem</DropdownItem>
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
