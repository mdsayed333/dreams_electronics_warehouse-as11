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
    const updatedProduct = {
      img: img,
      name: name,
      email: email,
      description: description,
      price: price,
      quantity: newQuantity,
      supplierName: supplierName,
    };

    const url = `https://arcane-fjord-84563.herokuapp.com/product/${productId}`
  fetch(url, {
    method: "PUT",
    body: JSON.stringify(updatedProduct),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      setProduct(updatedProduct)
    });
  };
// let inputValue;
  return (
    <div>
      <div className="mx-auto col-md-8 col-lg-6 updateProductContainer">
      <h2 className="text-center my-2 title">UPDATE PRODUCTS</h2>
      <div className="card h-100 updateProductCard">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h4 className="title text-danger">{name} </h4>
          <p className="card-text">
            {description}
          </p>
          <p>Price: <span className="text-danger">{price}</span> </p>
          <p>Quantity: <span className="text-danger">{quantity}</span> </p>
          <h5>Supplier: <span className="text-danger">{supplierName}</span> </h5>
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
                setInputWarning(<p className="text-danger">Please input a number of quantity.</p>)
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
