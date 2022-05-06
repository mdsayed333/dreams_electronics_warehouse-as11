import React from "react";
import "./Items.css";

const Items = ({ product, handleDelete }) => {
  const { name, img, price, quantity, description, supplierName, _id } = product;

  return (
    <div className="col-12 col-sm-6 col-md-4 py-2 productCard">
      <div className="card card-items h-100">
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
        {/* <img src={img} className="img-fluid rounded" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p>{price} </p>
          <p>{quantity} </p>
          <h5>{supplier} </h5>
        </div> */}
          <div className="d-flex justify-content-center pb-2">
            <button onClick={()=> handleDelete(_id)} className="my-button w-50">DELETE</button>
          </div>
      </div>
    </div>
  );
};

export default Items;
