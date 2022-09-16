import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';

function Navigation() {
	return (
		<div>
			<Navbar bg="dark" variant="dark" expand="lg">
			<Container>
				<Navbar.Brand as={Link} to='/'>
					<img
					alt=""
					src="/logo.svg"
					width="30"
					height="30"
					className="d-inline-block align-top"
					/>{' '}
					CROSS MEDIA
			</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link as={Link} to='/'>HOME</Nav.Link>
						<Nav.Link as={Link} to='/about'>ABOUT</Nav.Link>
						<NavDropdown title="SERVICES" id="basic-nav-dropdown">
							<NavDropdown.Item as={Link} to='/shodo'>
								SHODO
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} to ='/bonsai'>
								BONSAI
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<Nav>
						<Nav.Link as={Link} to='/contact'>CONTACT</Nav.Link>
					</Nav>
					</Navbar.Collapse>
				</Container>
    		</Navbar>
		</div>
	)
};

export default Navigation;