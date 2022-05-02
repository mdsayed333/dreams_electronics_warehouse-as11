import React, { useEffect, useState } from 'react';
import Product from './Product/Product';

const Inventory = () => {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch('data.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    },[]);

    

    // console.log(products);
    return (
        <div>
            <h2>This is Inventory</h2>
            <div className='row'>
                {
                    products.map(product => <Product 
                    key={product.id}
                    product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Inventory;