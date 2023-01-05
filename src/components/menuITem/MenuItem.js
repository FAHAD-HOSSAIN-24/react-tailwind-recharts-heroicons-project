import React from 'react';

const MenuItem = (props) => {
    const {menuName, link} = props.menuITem
    return (
            <div className='duration-300 hover:text-white'>

                <li><a href={link}></a>{menuName}</li>
            </div>
    );
};

export default MenuItem;