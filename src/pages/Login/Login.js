import React from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Login = () => {
  const navigate = useNavigate();
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);


  if(user){
     navigate('/');
  }

  let loginErr;
  if(error){
     loginErr = <p className="text-danger">{error.message}</p>
  }

  const handleSubmit = (event) => {
    event.preventDefault();
      const email = event.target.email.value;
      const password = event.target.password.value;
      
        signInWithEmailAndPassword(email, password);
  };
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
            required
          />
        </Form.Group>

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

      <div className="d-flex justify-content-between align-items-center">
      <p>
        {/* Don't have account? */}
         <Link
          to="/register"
          role="button"
          className="text-danger text-decoration-none"
        //   onClick={navigateRegister}
        >
          Create an account
         </Link>
      </p>
      <p>
        Forget Password?
        <button
          className="btn btn-link text-primary text-decoration-none"
        //   onClick={resetPassword}
        >
          Reset Password
        </button>
      </p>
      </div>
    </div>
  );
};

export default Login;
