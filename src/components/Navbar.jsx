import { React } from 'react';
import { Link } from 'react-router-dom';
import "../assets/css/navbar.css"
import { Navbar, Nav, Collapse, NavDropdown, Container, Form, Button } from 'react-bootstrap';

function Header() {
    return (
        <>
            <Navbar expand="lg" className='py-4'>
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
                        <Form className="d-flex headerForm border-1">
                            <Form.Control
                                type="search"
                                placeholder="Search 10,000 Products"
                                className=""
                                aria-label="Search"
                            />
                            <Button className='bg-light text-dark border-0'><i class="fa-solid fa-magnifying-glass"></i></Button>
                        </Form>
                        <Navbar.Collapse id="navbar-nav">
                            <Nav className="w-100 justify-content-center">
                                <Link to="/about" className='nav-link'>Home</Link>
                                <Link to="/about-us" className='nav-link'>About Us</Link>
                                <Link to="/accessories" className='nav-link'>Accessories</Link>
                                <Link to="/apparels" className='nav-link'>Apparels</Link>
                                <Link to="/jackets" className='nav-link'>Jackets</Link>
                                <Link to="/contact" className='nav-link'>Contact</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;