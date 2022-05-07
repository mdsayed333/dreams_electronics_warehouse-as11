import React from "react";
import { Form } from "react-bootstrap";
import "./NewCustomer.css";

const NewCustomer = () => {
  return (
    <div className="CustomerContainer py-5">
      <div className="row">
        <div className="col-6 p-2">
          <div className=" customer-form">
            <h2 className="text-center title">New Customer</h2>
            <Form className="my-3 text-white">
              <Form.Group className="mb-3">
                <Form.Label htmlFor="name">Name</Form.Label>
                <Form.Control
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Customer Name"
                  required
                />
              </Form.Group>
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
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Customer Address</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="number">Phone Number</Form.Label>
                <Form.Control
                  id="number"
                  name="number"
                  type="number"
                  placeholder="Customer Phone Number"
                  required
                />
              </Form.Group>
              <div className="text-center">
                <button className="my-button px-4" type="submit">
                  Add New Customer
                </button>
              </div>
            </Form>
          </div>
        </div>
        <div className="col-6 d-flex align-items-center">
          <div className="customer-form">
            <h3 className="title text-center pb-3">We committed to give the best service to our customer.</h3>
            <img
              className="img-fluid rounded"
              src="https://i.ibb.co/GQFVLnW/chris-liverani-9cd8q-Oge-NIY-unsplash.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCustomer;
