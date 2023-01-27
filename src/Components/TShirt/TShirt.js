import React from 'react';
import Button from 'react-bootstrap/Button';
import Review from '../Review/Review';
const TShirt = ({ TShirt, clickHandler }) => {
    const { name, picture, price } = TShirt;
    return (
        <div className="col">
            <div className='card h-100'>
                <img className='img-fluid w-75 h-50 m-auto p-1' src={picture} alt="" />
                <div className='mb-3'>
                    <h4>{name}</h4>
                    <h5>Price: ${price}</h5>
                    <Button onClick={() => clickHandler(TShirt)} className='w-75 fw-bold' variant="warning">Buy Now</Button>
                    <Review></Review>
                </div>
            </div>
        </div>

    );
};

export default TShirt;