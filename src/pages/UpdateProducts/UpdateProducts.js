// import React from 'react';
// import { useParams } from 'react-router-dom';
// import useProducts from '../../hooks/useProducts';

// const UpdateProducts = () => {
//     const productId = useParams();
//     const [products, setProducts] = useProducts([]);

//     // const {name, price, img, quantity, supplierName, description } = product;

//     return (
//       <div className="col-md-6 col-lg-4">
//         {/* <h2>Product : {name} </h2> */}
  
//         <div className="card h-100">
//           <img src={img} className="card-img-top" alt="..." />
//           <div className="card-body">
//             <h5 className="card-title">{name} </h5>
//             <p className="card-text">
//               {description}
//             </p>
//             <h4>Price: {price} </h4>
//             <p>Quantity: {quantity} </p>
//             <h4>Supplier Name: {supplierName} </h4>
//           </div>
//           <div className="d-flex mx-auto bg-white m-0 p-0">
//             <button className="btn btn-outline-primary w-50">Delivered</button>
//             <button className="btn btn-outline-primary w-50">Add</button>
//           </div>
//         </div>
//       </div>
//     );
// };

// export default UpdateProducts;