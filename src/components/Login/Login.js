import React from "react";
import { Col, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import google from '../../Images/google.png' 
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const {
    handleEmailChange,
    handlePasswordChange,
    signInWithEmail,
    error,
    signInWithGoogle
    } = useAuth();

    const location = useLocation();
    const redirect_url = location.state?.from || '/home';
    const history = useHistory();
    const googleSignIn = () =>{
      signInWithGoogle()
      .then((result) =>{
        history.push(redirect_url);
       })
    }
  return (
    <div className="text-center my-4">
      <h2>Please Login</h2>
      <p className=" mt-2">Login with Email andPassword</p>
      <p className="text-danger text-center">{error}</p>
      <div className="w-25 mx-auto">
        <Form onSubmit={signInWithEmail}>
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
                  onBlur={handleEmailChange}
                  type="email"
                  autoComplete="current-email"
                  id="email"
                  placeholder="Enter your email address"
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
                  onBlur={ handlePasswordChange}
                  type="password"
                  autoComplete="current-password"
                  id="password"
                  placeholder="Enter your password"
                />
              </InputGroup>
            </Col>
          </Row>

          <button type="submit" className="btn btn-primary mt-2 w-100">
            Login
          </button>
        </Form>
      </div>
      <p className="mt-2">
       new user? then <br />
        <NavLink className="text-decoration-none ml-2" to="/signup">
          click here
        </NavLink>
        <br />
        <NavLink className="text-decoration-none" to="/reset">
          Forget password? 
        </NavLink>
      </p>
      <p className="mt-3">Or</p>
      <p> Login with</p>
      
        <button onClick={googleSignIn} className="btn">
          <img src={google} width="46px" alt="google-icon" />
        </button>
        
       
      
    </div>
  );
};

export default Login;