import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const Cart = ({ cart, removeItem }) => {
    console.log(cart);
    let total = 0;
    for (const product of cart) {
        total = total + product.price;
        console.log(total);
    }
    return (
        <div>
            <h5>Order Quantity: {cart.length}</h5>
            <div className='d-flex justify-content-around ps-2'>
                <h5>Product</h5>
                <h5>Price</h5>
            </div>
            <div className='text-light'>
                {
                    cart.map(product => <p className='d-flex justify-content-between '
                        key={product._id}>
                        <h6 className='ps-5 mt-1'>{product.name}</h6>
                        <h6 className='me-2'>{product.price} <button onClick={() => removeItem(product)} className='ms-3 border-0 bg-danger px-2 py-1 rounded-5'>
                            <FontAwesomeIcon className='delete-icon' icon={faTrashCan}></FontAwesomeIcon>
                        </button>
                        </h6>
                    </p>)
                }
            </div>
            <hr className='mx-4' />
            <div className='d-flex justify-content-around'>
                <h5>Total Price</h5>
                <h5 className='me-2'>${total}</h5>
            </div>

        </div>
    );
};

export default Cart;