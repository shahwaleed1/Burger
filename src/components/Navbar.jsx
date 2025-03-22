import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const MyNavbar = () => {
    return (
        <Navbar className='nav-red'>
            <Container className='d-flex justify-content-between '>
                <Navbar.Brand href="/" className='text-white'><img className='mb-1' src="nav-logo.png" alt="logo" width={30} /> Shah Burger</Navbar.Brand>
                <Nav>
                    <Nav.Link className='text-white' to="/">Home</Nav.Link>
                    <Nav.Link className="nav-link" to="/products">Menu</Nav.Link>
                    <Nav.Link className='text-white' href="#pricing">Service</Nav.Link>
                    <Nav.Link className='text-white' href="#pricing">Login</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default MyNavbar