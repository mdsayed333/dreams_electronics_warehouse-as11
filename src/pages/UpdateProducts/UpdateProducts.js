import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import useProductDetails from "../../hooks/useProductDetails";
import './UpdateProducts.css';

const UpdateProducts = () => {
  const [inputAdd, setInputAdd] = useState(0);
  const [inputWarning, setInputWarning] = useState('');
  const { productId } = useParams();
  const [product, setProduct] = useProductDetails(productId);

  const { name, price, img, quantity, supplierName, description, email } =
    product;

  

  const handleDelivered = (math) => {
    const newQuantity = (parseInt(quantity)+ parseInt(math));
    console.log(newQuantity);
    const updatedProduct = {
      img: img,
      name: name,
      email: email,
      description: description,
      price: price,
      quantity: newQuantity,
      supplierName: supplierName,
    };

    const url = `http://localhost:5000/product/${productId}`
  fetch(url, {
    method: "PUT",
    body: JSON.stringify(updatedProduct),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      setProduct(updatedProduct)
    });
  };
// let inputValue;
  return (
    <div>
      <div className="mx-auto col-md-8 col-lg-6 updateProductContainer">
      <h2 className="text-center">UPDATE PRODUCTS</h2>
      <div className="card h-100">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name} </h5>
          <p className="card-text">{description}</p>
          <h4>Price: {price} </h4>
          <p>Quantity: {quantity} </p>
          <h4>Supplier Name: {supplierName} </h4>
        </div>
        <div className="mx-auto bg-white">
          <button
            onClick={()=>handleDelivered(-1)}
            className="my-button w-100"
          >
            Delivered
          </button>
          <div className="py-2">
            {
              inputWarning
            }
            
            <input
              type="number"
              className="my-2"
              name="inputQuantity"
              placeholder="Input Quantity"
              onChange={(event)=> {
                setInputAdd(event.target.value);
              //  const inputValue = ()=> event.target.value;
              }}
            /> 
            <br />
            <button  onClick={()=>{
              if(inputAdd >= 1){
                handleDelivered(+inputAdd);
                setInputWarning('');
                // inputValue();
              }else{
                setInputWarning(<p className="text-danger">Please input a number</p>)
              }
            }} className="my-button  w-100">Add</button>
          </div>
        </div>
      </div>
    </div>
        <div className="w-50 mx-auto manageButton">
          <div className="text-center my-4 ">
              <Link to='/manageitem' className="btn btn-outline-dark">Manage All Inventory</Link>
          </div>
        </div>
    </div>
  );
};

export default UpdateProducts;
