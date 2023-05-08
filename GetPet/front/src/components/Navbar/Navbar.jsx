import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

import { MdPets } from "react-icons/md";

import './Navbar.css'

function NavbarComponent(props) {
  const [scroll, setScroll] = useState(false);
  const navigate = useNavigate()


  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  return (
    <>
      {["xxl"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          style={{ backgroundColor: "#E2955C" }}
          className={scroll ? "shadow-sm rounded-bottom fixed-top" : "fixed-top"}
        >
          <Container fluid>
            <Navbar.Brand>
              <MdPets
                style={{
                  height: "40px",
                  width: "40px",
                  marginLeft: 20,
                  color: "white",
                  cursor: 'pointer'
                }}
                onClick={() => {navigate('/home')}}
              ></MdPets>{" "}
              <span className="text-white mx-2" style={{cursor: 'pointer'}} onClick={() => {navigate('/home')}}>Pet Center</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              style={{ backgroundColor: "#E2955C" }}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <span className="text-white fw-bold">Side menu</span>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-start flex-grow-1">
                  <Nav.Link href="#action1">
                    <span className="text-white fw-light">
                      Know your friend
                    </span>
                  </Nav.Link>
                  <Nav.Link href="#action2">
                    <span className="text-white fw-light">How it works</span>
                  </Nav.Link>
                  <Nav.Link onClick={() => {navigate('/friends')}}>
                    <span className="text-white fw-light">Friends</span>
                  </Nav.Link>
                  <Nav.Link href="#action2">
                    <span className="text-white fw-light">Contact</span>
                  </Nav.Link>
                </Nav>
                <Nav className="justify-content-end">
                  <hr />
                  <Button
                    variant="light border shadow-sm"
                    style={{ maxWidth: 250 }}
                    className='contracted'
                  >
                    Sign In
                  </Button>
                  <Button
                    variant="light border shadow-sm mx-2"
                    style={{ maxWidth: 250 }}
                  >
                    Login
                  </Button>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <div>{props.children}</div>
    </>
  );
}

export default NavbarComponent;
