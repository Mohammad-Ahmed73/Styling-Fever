import { React } from 'react';
import { Link } from 'react-router-dom';
import "../assets/css/navbar.css"
import { Navbar, Nav, Collapse, NavDropdown, Container } from 'react-bootstrap';

function Header() {
    return (
        <>
            <Navbar expand="lg" className='py-lg-5 py-4'>
                <Container fluid="lg">
                    <Navbar.Brand>
                        <Link to="/">
                            Logo
                        </Link>
                    </Navbar.Brand>
                    <div className='d-flex align-items-center nav-main-menu'>
                        <Navbar.Toggle aria-controls="navbar-nav">
                            <i class="fa-solid fa-bars open"></i>
                            <i class="fa-solid fa-xmark close"></i>
                        </Navbar.Toggle>
                        <Navbar.Collapse id="navbar-nav">
                            <Nav className="w-100 justify-content-center">
                                <Link to="/about" className='nav-link'>About</Link>
                                <Link to="/services" className='nav-link'>Services</Link>
                                <Link to="/contacts" className='nav-link'>Contacts</Link>
                                <Link to="/faq" className='nav-link'>FAQ</Link>
                            </Nav>
                        </Navbar.Collapse>
                        <Link href="/sign-up" className='navbar-link'>Sign Up</Link>
                    </div>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;