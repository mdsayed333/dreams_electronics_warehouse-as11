import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";

const Register = () => {
  const navigate = useNavigate();
  const [passError, setPassError] = useState('');
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  if(user){
    navigate('/');
  }
  
  let registerErr;
  if(error){
     registerErr = <p className="text-danger">{error.message}</p>
  }
  
    const handleSubmit = (event) => {
      event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;

        if(password === confirmPassword){
          createUserWithEmailAndPassword(email, password);
        }
        else{
          setPassError(<p className="text-danger">Confirm Password not matched</p>);
        }
    };

  return (
    <div className="w-50 mx-auto">
      <h2>Create account</h2>

      <Form onSubmit={handleSubmit} className="my-3">
        <Form.Group className="mb-3">
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            id='email'
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        {passError}
        <Form.Group className="mb-3">
        <Form.Label htmlFor="confirmPassword">Confirm Password</Form.Label>
          <Form.Control
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            required
          />
        </Form.Group>
        <Button
          className="w-50 d-block mx-auto mb-2"
          variant="primary"
          type="submit"
        >
          Register
        </Button>
        {registerErr}
      </Form>
      <p>
          Already have an account? <Link to='/login'>Login</Link>
      </p>
    </div>
  );
};

export default Register;
