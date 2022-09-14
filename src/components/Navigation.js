import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navigation() {
	return (
		<Navbar collapseOnSelect bg="dark" variant="dark" expand='lg'>
			<Navbar.Brand as={Link} to='/'>
				Cross Media
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav>
					<Nav.Link as={Link} to='/about'>
						About
					</Nav.Link>
					<Nav.Link as={Link} to='/shodo'>
						Shodo
					</Nav.Link>
					<Nav.Link as={Link} to='/bonsai'>
                        Bonsai
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Navigation;