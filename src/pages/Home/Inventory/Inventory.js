import { Link } from "react-router-dom";
import useProducts from "../../../hooks/useProducts";
import Product from "../Product/Product";
import './Inventory.css';

const Inventory = () => {
  const [products, setProducts] = useProducts([]);

  return (
    <div className="inventory-container py-5">
      <h1 className="text-center mt-5 mb-4 title">Inventory</h1>
      <div className="row">
        {products.map((product, index) => (
          <Product key={product._id} index={index} product={product}></Product>
        ))}
      </div>
      <div className="w-100 w-md-50 mx-auto">
        <div className="text-center my-4 manageButton">
          <Link to="/manageitem" className="btn btn-outline-dark">
            Manage All Inventory
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
