import React from 'react';
import './Header.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../Images/cropped-logo.png';



const Header = () => {
    const {user, logOut} = useAuth();
    const { displayName, photoURL} = user;

    const navStyle = {
        textDecoration: "none",
        color:"black",
        margin: "0 5px",
        
      };
    return (
        <div>
            <Navbar bg="light" text="white" expand="lg">
                <Container>
                    <Navbar.Brand  as={NavLink} to="/home"><img width="280px" src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center">
                        <NavLink className="fw-bold" style={navStyle}  to="/home">HOME</NavLink>
                        <NavLink className="fw-bold" style={navStyle} to="/services">SERVICES</NavLink>
                        <NavLink className="fw-bold"  style={navStyle} to="/contact">CONTACT</NavLink>

                        {!displayName? (
                            <>
                            <NavLink className="fw-bold" style={navStyle} to="/signup">Sign Up</NavLink>
                            <NavLink className="fw-bold" style={navStyle} to="/login">Log in</NavLink>
                            </>
                            ) :(
                            <NavDropdown title={
                                <img
                                 style={{
                                     width:"45px",
                                     borderRadius:"50%"
                                 }}
                                 src={photoURL} alt="" />

                            }>
                                <div className="text-center">
                                    <h6>{displayName}</h6>
                                    <button 
                                    onClick={logOut} 
                                    className="btn btn-primary">Log Out</button>
                                </div>
                        
                            </NavDropdown>
                            )}


                       
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>




            
        </div>
    );
};

export default Header;