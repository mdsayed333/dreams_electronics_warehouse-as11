import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loadding = () => {
    return (
        <div className='text-center mt-5'>
            <Spinner animation="grow" />
        </div>
    );
};

export default Loadding;