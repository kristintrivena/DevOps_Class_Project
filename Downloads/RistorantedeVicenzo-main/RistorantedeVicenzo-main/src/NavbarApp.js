import {Navbar, Nav, Container, Form, FormControl} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import './styling/Navbar.css';

function NavbarApp() {
    return (
        <Navbar className='navbar-custom' variant="dark">
            <Container fluid>
                <Navbar.Brand>Ristorante De Vincenzo</Navbar.Brand>
                <Nav className= "ms-auto">
                    <Link to={'/'} className="nav-link">Home</Link>
                    <Link to={'/menu'} className="nav-link">Food Menu</Link>
                </Nav>
                <Form className='d-flex' inline>
                    <FormControl type="search" placeholder='Search' className="me-2 rounded-input" aria-label="Search"/>
                </Form>
                <Nav>
                    <Nav.Link href="/cart" className="position-relative">
                        <FaShoppingCart className='cart-icon'/>
                        <span className="position-absolute top-5 start-100 translate-middle badge rounded-pill bg-danger">
                            3 
                        </span>
                    </Nav.Link>
                    <Nav.Link href="log_in" className="position-relative">
                        <FaUser className='user-icon'/>
                    </Nav.Link>
                </Nav>
            </Container>
    </Navbar>
    );
}

export default NavbarApp;