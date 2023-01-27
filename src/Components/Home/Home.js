import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';


const Home = () => {
    const tShirts = useLoaderData();
    console.log(tShirts);
    const [cart, setCart] = useState([]);
    const clickHandler = (tShirt) => {
        const exist = cart.find(ts => ts._id === tShirt._id);
        if (exist) {
            alert('TShirt already added');
        }
        else {
            const newCart = [...cart, tShirt];
            setCart(newCart);
        }
    }
    const removeItem = (tShirt) => {
        const leftItem = cart.filter(product => product._id !== tShirt._id);
        setCart(leftItem);
    }
    return (
        <div className='container d-flex my-5'>
            <div className='col-md-9'>
                <div className='row row-cols-1 row-cols-md-3 g-4'>
                    {
                        tShirts.map(tShirt => <TShirt
                            key={tShirt._id}
                            TShirt={tShirt}
                            removeItem clickHandler={clickHandler}>
                        </TShirt>)
                    }
                </div>
            </div>
            <div className='col-md-3 bg-warning ms-4 rounded h-50'>
                <h3 className='mt-3'>Cart List</h3>
                <Cart cart={cart}
                    removeItem={removeItem}>
                </Cart>
            </div>
        </div>
    );
};

export default Home;