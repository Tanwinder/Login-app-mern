import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem } from 'reactstrap';

class NavBar extends React.Component {
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
					<NavbarBrand href="/">MERNAPP</NavbarBrand>
					<NavbarToggler onClick={ this.toggle } />
					<Collapse isOpen={ this.state.isOpen } navbar>
						<Nav className="mern-nav ml-auto" navbar>
							<NavItem>
								<Link to="/todolist">Todo</Link>
							</NavItem>
							<NavItem>
								<Link to="/products">Products</Link>
							</NavItem>
							<NavItem>
								<Link to="/orders">Orders</Link>
							</NavItem>
							<NavItem>
								<Link to="/About">About</Link>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}

export default NavBar;