import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const useProductDetails = (productId) =>{
    
    const [product, setProduct] = useState([]);

    useEffect( () => {
        const url = `http://localhost:5000/product/${productId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[productId]);

    return [product];
}
export default useProductDetails;