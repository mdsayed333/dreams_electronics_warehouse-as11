import React from 'react';
import { useParams } from 'react-router-dom';
import useProductDetails from '../../hooks/useProductDetails';

const UpdateProducts = () => {
  const {productId} = useParams();
    const [product] = useProductDetails(productId);

    const {name, price, img, quantity, supplierName, description } = product;

    return (
      <div className="mx-auto col-md-8 col-lg-6">
          <h2 className='text-center'>UPDATE PRODUCTS</h2>
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
          <div className="mx-auto bg-white">
            <button className="btn btn-outline-primary w-50">Delivered</button>
            <div>
              <input type="number" className='my-2' placeholder='Input Quantity' />
              <button className="btn btn-outline-primary w-50">Add</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default UpdateProducts;