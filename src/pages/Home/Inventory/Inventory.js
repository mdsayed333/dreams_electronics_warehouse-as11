import React, { useEffect, useState } from 'react';
import Product from './Product/Product';

const Inventory = () => {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch('data.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    },[]);

    

    console.log(products);
    return (
        <div>
            <h2>This is Inventory</h2>
            {
                products.map(product => <Product ></Product>)
            }
        </div>
    );
};

export default Inventory;