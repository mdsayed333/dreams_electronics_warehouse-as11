import React, { useEffect } from 'react';
import useProducts from '../../hooks/useProducts';
import AllProducts from './AllProducts/AllProducts';

const ManageItem = () => {
    const [products, setProducts] = useProducts([]);

    const handleDelete = (_id) => {
        const confirm = window.confirm("Are you sure you want to delete ...");
        if(confirm){
            fetch(`https://arcane-fjord-84563.herokuapp.com/product/${_id}`, {
            method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = products.filter(product => product._id !== _id);
                setProducts(remaining);
            });
        }
    }

    return (
        <div>
            <h2>All Inventory</h2>
            <div>
                <table className='table table-dark table-striped'>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Supplier Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            products.map((product, index) => <AllProducts 
                                key={product._id}
                                handleDelete={handleDelete}
                                index={index}
                                product={product}
                            ></AllProducts>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItem;