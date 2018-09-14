import React from 'react';
import { NavLink as Link, withRouter } from 'react-router-dom';
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
		const { location } = this.props;
		const activeNav = location.pathname;
		return (
			<Navbar color="light" light expand="md">
				<Link className="brand-name" to="/">MERNAPP</Link>
				<Nav className="mern-right-nav">
					<NavItem active={activeNav == '/signin'}>
						<Link to="/signin">Sign In</Link>
					</NavItem>
					<NavItem active={activeNav == '/signup'}>
						<Link to="/signup">Sign Up</Link>
					</NavItem>
				</Nav>
				<NavbarToggler onClick={ this.toggle } />
				<Collapse className="mern-center-nav" isOpen={ this.state.isOpen } navbar>
					<Nav className="ml-auto" navbar>
						<NavItem active={activeNav == '/todolist'}>
							<Link to="/todolist">Todo</Link>
						</NavItem>
						<NavItem active={activeNav == '/products'}>
							<Link to="/products">Products</Link>
						</NavItem>
						<NavItem active={activeNav == '/orders'}>
							<Link to="/orders">Orders</Link>
						</NavItem>
						<NavItem active={activeNav == '/About'}>
							<Link to="/About">About</Link>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		);
	}
}

export default withRouter(NavBar);