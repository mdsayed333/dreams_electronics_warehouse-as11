import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {



    const handleSubmit = () => {

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
          Login
        </Button>
      </Form>
      <p>
          Already have an account? <Link to='/login'>Login</Link>
      </p>
    </div>
  );
};

export default Register;
