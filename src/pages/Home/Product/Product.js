import React from "react";
import { useNavigate } from "react-router-dom";
import UpdateProducts from "../../UpdateProducts/UpdateProducts";
import './Product.css';

const Product = ({ product, index }) => {
    const navigate = useNavigate();
    const {name, price, img, quantity, supplierName, description, _id } = product;



  return (
    <div className="col-md-6 col-lg-4 my-2 productCard">
      {
        index < 6 && 
        <>
      {/* <h2>Product : {product.id} </h2> */}
      <div className="card h-100  bg-light">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name} </h5>
          <p className="card-text">
            {description}
          </p>
          <h4>Price: {price} </h4>
          <p>Quantity: {quantity} </p>
          <h4>Supplier Name: {supplierName} </h4>
        </div>
        <div className="text-center pb-3">
          <button onClick={() => navigate(`/update/${_id}`)} className="my-button w-50">Update</button>
        </div>
      </div>
    </>
      }
    </div>
  );
};

export default Product;
