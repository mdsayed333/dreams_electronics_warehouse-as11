import useProducts from '../../../hooks/useProducts';
import Product from '../Product/Product';

const Inventory = () => {
    const [products, setProducts] = useProducts([]);

    

    return (
        <div>
            <h2 className='text-center mt-5 mb-4'>Inventory</h2>
            <div className='row'>
                {
                    products.map((product, index) => <Product 
                    key={product._id}
                    index={index}
                    product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Inventory;