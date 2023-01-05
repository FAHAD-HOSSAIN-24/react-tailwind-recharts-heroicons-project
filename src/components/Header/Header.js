import React from 'react';
import Nav from '../navigation/Nav';

const Header = () => {
    return (
        <div>
            <Nav></Nav>
            <h2 className='text-3xl font-bold'>This is header</h2>
        </div>
    );
};

export default Header;