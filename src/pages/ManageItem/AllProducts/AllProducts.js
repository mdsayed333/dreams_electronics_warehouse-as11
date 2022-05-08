import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./AllProducts.css";

const AllProducts = ({ product, index, handleDelete }) => {
  const { name, img, quantity, price, supplierName, _id } = product;

  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{name}</td>
      <td>{supplierName}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>
        <button onClick={() => handleDelete(_id)} className="delete-button ">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </td>
    </tr>
  );
};

export default AllProducts;
