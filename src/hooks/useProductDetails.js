import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const useProductDetails = (productId) =>{
    
    const [product, setProduct] = useState([]);

    useEffect( () => {
        const url = `https://arcane-fjord-84563.herokuapp.com/product/${productId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[productId]);

    return [product, setProduct];
}
export default useProductDetails;