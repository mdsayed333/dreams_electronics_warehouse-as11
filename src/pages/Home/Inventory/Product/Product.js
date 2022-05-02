import React from "react";

const Product = ({ product }) => {
    const {name, price, img, quantity, supplierName, description } = product;
  return (
    <div className="col-md-6 col-lg-4">
      <h2>Product : {product.id} </h2>

      <div className="card h-100">
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
        <div className="">
          <button className="btn btn-outline-primary">Update</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
