import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='bg-dark py-4'>
            <Link className='me-3 text-decoration-none' to='/'>Home</Link>
            <Link className='me-3 text-decoration-none' to='/order'>Order</Link>
            <Link className='text-decoration-none' to='/about'>About</Link>
        </nav>
    );
};

export default Header;