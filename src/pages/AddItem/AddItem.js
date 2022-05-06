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

    fetch("https://arcane-fjord-84563.herokuapp.com/product", {
      method: "POST",
      headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(product)
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="w-50 mx-auto addItemContainer my-5">
      <h2 className="title text-center my-3">Add a new item</h2>

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
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Short Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            placeholder="Enter product description"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" value={user.email} placeholder="Enter email" disabled/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" name="price" placeholder="Price" required/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Quantity</Form.Label>
          <Form.Control type="number" name="quantity" placeholder="Quantity" required/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Supplier Name</Form.Label>
          <Form.Control
            type="text"
            name="supplier"
            placeholder="Enter supplier name"
            required
          />
        </Form.Group>

        <div className="text-center">
          <button className="my-button px-5" type="submit">
            Add Item
          </button>
        </div>
      </Form>
    </div>
  );
};

export default AddItem;
