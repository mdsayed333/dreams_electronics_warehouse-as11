import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../../firebase.init';
import Items from './Items/Items';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [myProducts, setMyProducts] = useState([]);
    // const navigate = useNavigate();
    const email = user?.email;
    const url = `http://localhost:5000/myProduct?email=${email}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setMyProducts(data));



    const handleDelete = (_id) => {
        // const confirm = window.confirm("Are you sure you want to delete ...");
        // if(confirm){
        //     fetch(`https://arcane-fjord-84563.herokuapp.com/product/${_id}`, {
        //     method: 'DELETE',
        //     })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         const remaining = myProducts.filter(product => product._id !== _id);
        //         // setMyProducts(remaining);
        //     });
        // }
    }


    return (
        <div className='inventory-container'>
            <h2 className='text-center container-title'>My Items</h2>
            <div className="row">
                {
                    myProducts.map(product => <Items 
                        key={product._id}
                        product={product}
                        handleDelete={handleDelete}
                    ></Items>)
                }
            </div>
        </div>
    );
};

export default MyItems;