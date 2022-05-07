import React from 'react';
import useProducts from '../../../hooks/useProducts'

const AllProducts = () => {
    const [products, setProducts] = useProducts([]);

    return (
        <div>
            <h2>Our All Product</h2>
        </div>
    );
};

export default AllProducts;