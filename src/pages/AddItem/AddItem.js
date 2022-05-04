import React from "react";
import { Form } from "react-bootstrap";
import "./AddItem.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const AddItem = () => {
  const [user, loading, error] = useAuthState(auth);

  const handleSubmit = (event) => {
    event.preventDefault();
    const product = {
      img: event.target.image.value,
      name: event.target.name.value,
      email: user.email,
      description: event.target.description.value,
      price: event.target.price.value,
      quantity: event.target.quantity.value,
      supplierName: event.target.supplier.value,
    };
    console.log(product);

    fetch("http://localhost:5000/product", {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <div className="w-50 mx-auto addItemContainer">
      <h2 className="text-center my-3">Add a new item</h2>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter Product Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            name="image"
            placeholder="Enter image URL"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Short Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            placeholder="Enter product description"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" name="price" placeholder="Price" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Quantity</Form.Label>
          <Form.Control type="number" name="quantity" placeholder="Quantity" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Supplier Name</Form.Label>
          <Form.Control
            type="text"
            name="supplier"
            placeholder="Enter supplier name"
          />
        </Form.Group>

        <div className="text-center">
          <button className="my-button" type="submit">
            Add Item
          </button>
        </div>
      </Form>
    </div>
  );
};

export default AddItem;
