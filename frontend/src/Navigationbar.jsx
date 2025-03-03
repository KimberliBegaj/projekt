import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import image12 from './image12.png';
import './Style.css'

function Navigationbar() {
    return (
        <Navbar expand="lg" className="navbar-overlay" fixed="top">
            <Navbar.Brand>
                <Link to="/" style={{ textDecoration:"none" ,color: "black",marginLeft:"70px" }}>
                    <img src={image12} alt="image12" width="53px" height="50px" /> Konomi Dental Clinic
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle  />
            <Navbar.Collapse className="justify">
                <Nav >
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <NavDropdown title="Services">
                        <NavDropdown.Item as={Link} to="/general-dentistry">General Dentistry</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/surgical-care">Surgical Care</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/orthodontic-treatment">Orthodontic Treatment</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={Link} to="/">(033)230149</Nav.Link>
                </Nav>
                <Button as={Link} to="/book-form" style={{ borderRadius:"20px",marginLeft:"10px", fontFamily: "coursive", color: "white", borderColor:"#76D7EA", backgroundColor:"#76D7EA" }}>
                    Book Now
                </Button>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigationbar;