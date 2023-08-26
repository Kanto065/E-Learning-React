import React from 'react';
import { useNavigate } from 'react-router-dom';
import Cart from '../Cart/Cart';
import './Orders.css';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../Utility/localStorage';
import useCart from '../hooks/useCart';
import useCourse from '../hooks/useCourse';

const Orders = () => {
    const [products, setProducts] = useCourse();
    const [cart, setCart] = useCart(products);
    const navigate = useNavigate();
    const handleRemoveProduct = product => {
        const rest = cart.filter(pd => pd._id !== product._id);
        setCart(rest);
        removeFromDb(product._id);
    }


    return (
        <div className='shop-container'>
            <div className="review-items-container">
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemoveProduct={handleRemoveProduct}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={() => navigate('/shipment')}>Proceed Shipping </button>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;