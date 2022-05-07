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
      <div className="card cardShadow  h-100  bg-light">
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
