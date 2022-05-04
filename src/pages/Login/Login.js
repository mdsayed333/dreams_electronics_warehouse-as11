import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate = useNavigate();
  const [resetWarning, setResetWarning] = useState('');
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, passResetError] = useSendPasswordResetEmail(auth);
  const [email, setEmail] = useState('');
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  if(user){
     navigate(from, {replace: true});
  }

  let loginErr;
  if(error){
     loginErr = <p className="text-danger">{error.message}</p>
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
      const password = event.target.password.value;
      
        signInWithEmailAndPassword(email, password);
  };

 
  const passReset = async() => {
    if(email){
      await sendPasswordResetEmail(email);
          toast('Sent password reset email');
    }else{
      setResetWarning(<p className="text-danger">Please input your email</p>);
    }
  }
  return (
    <div className="w-50 mx-auto">
      <h2>Please Login</h2>
      <Form onSubmit={handleSubmit} className="my-3">
        <Form.Group className="mb-3">
        <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            id="email"
            name="email"
            type="email"
            placeholder="Enter email"
            onBlur={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        {resetWarning}
        <Form.Group className="mb-3" >
        <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <button
          className="w-50 d-block mx-auto mb-2 my-button"
          type="submit"
        >
          Login
        </button>
        {loginErr}
      </Form>
      <p className="text-danger">{passResetError?.message}</p>
     
      <div className="d-flex justify-content-between align-items-center">
          <p>
            <Link
              to="/register"
              role="button"
              className="text-danger text-decoration-none"
            >
              Create an account
            </Link>
          </p>
          <p>
            Forget Password?
            <button
              onClick={passReset}
              className="btn btn-link text-primary text-decoration-none"
            >
              Reset Password
            </button>
          </p>
      </div>
    </div>
  );
};

export default Login;
