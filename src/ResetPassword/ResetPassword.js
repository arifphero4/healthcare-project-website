
import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';



const ResetPassword = () => {
    const {handleEmailChange, handleResetPassword} = useAuth();
    return (
        <div>
            <div className="text-center w-25 mx-auto my-5">
                <Form onSubmit={handleResetPassword}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label> <h3>Your Email Address</h3> </Form.Label>
                        <FormControl onBlur={handleEmailChange} type="email" placeholder="Enter Email">
                        </FormControl>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default ResetPassword;