import { faEnvelope, faLink, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Form ,FormControl,InputGroup,Row} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const SignUp = () => {
    const {
        handleEmailChange,
        handlePasswordChange,
        handleNameChange,
        handlePhotoChange,
        error,
        createNewUser
        } = useAuth();
    return (
        <div className="text-center my-4">
            <h2>Please Sign Up </h2>
            <p className=" mt-2">Sign Up with Email and Password</p>
            <p className="text-danger text-center">{error}</p>
            <div className="w-25 mx-auto">
                <Form onSubmit={createNewUser}>
                <Row>
                    <Col className="text-start">
                    <Form.Label htmlFor="email" visuallyHidden>
                        Your Name
                    </Form.Label>
                    <InputGroup className="mb-2">
                        <InputGroup.Text>
                        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                        </InputGroup.Text>
                        <FormControl
                        required
                        onBlur={handleNameChange}
                        type="text"
                        autoComplete="current-email"
                        id="name"
                        placeholder="enter your name"
                        />
                    </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-start">
                    <Form.Label htmlFor="email" visuallyHidden>
                        Your Email Address
                    </Form.Label>
                    <InputGroup className="mb-2">
                        <InputGroup.Text>
                        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                        </InputGroup.Text>
                        <FormControl
                        required
                        onBlur={handleEmailChange}
                        type="email"
                        autoComplete="current-email"
                        id="email"
                        placeholder="enter your email address"
                        />
                    </InputGroup>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col className="text-start">
                    <Form.Label htmlFor="password" visuallyHidden>
                        Your Password
                    </Form.Label>
                    <InputGroup className="mb-2">
                        <InputGroup.Text>
                        <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                        </InputGroup.Text>
                        <FormControl
                        required
                        onBlur={ handlePasswordChange}
                        type="password"
                        autoComplete="current-password"
                        id="password"
                        placeholder="enter your password"
                        />
                    </InputGroup>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col className="text-start">
                    <Form.Label htmlFor="password" visuallyHidden>
                        Your Photo
                    </Form.Label>
                    <InputGroup className="mb-2">
                        <InputGroup.Text>
                        <FontAwesomeIcon icon={faLink}></FontAwesomeIcon>
                        </InputGroup.Text>
                        <FormControl
                        required
                        onBlur={ handlePhotoChange}
                        type="text"
                        autoComplete="current-text"
                        id="photo"
                        placeholder="enter photo url"
                        />
                    </InputGroup>
                    </Col>
                </Row>

                <button type="submit" className="btn btn-primary mt-2 w-100">
                    Sign Up
                </button>
                </Form>
            </div>
            <p className="mt-2">
            
                <NavLink className="text-decoration-none ml-2" to="/login">
                Already have an account? Please login!
                </NavLink>
            
                
            </p>
            
            
                
        
       
      
    </div>
    );
};

export default SignUp;