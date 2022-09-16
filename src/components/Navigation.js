import React from 'react';
import './styles/Navigation.css';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';

function Navigation() {
	return (
		<div>
			<Navbar bg="dark" variant="dark" expand="lg">
			<Container>
				<Navbar.Brand as={Link} to='/' id="nav-bar-header">
					{/* <img
					alt=""
					src="/logo.svg"
					width="30"
					height="30"
					className="d-inline-block align-top"
					/>{' '} */}
					<h2 id="nav-bar-header">CROSS MEDIA</h2>
			</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link as={Link} to='/' class="nav-text">HOME</Nav.Link>
						<Nav.Link as={Link} to='/about' class="nav-text">ABOUT</Nav.Link>
						<NavDropdown title="SERVICES" id="basic-nav-dropdown" class="nav-text">
							<NavDropdown.Item as={Link} to='/shodo' class="nav-text">
								SHODO
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} to ='/bonsai' class="nav-text">
								BONSAI
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<Nav>
						<Nav.Link as={Link} to='/contact' id="nav-text">CONTACT</Nav.Link>
					</Nav>
					</Navbar.Collapse>
				</Container>
    		</Navbar>
		</div>
	)
};

export default Navigation;