import React, { useState } from 'react';
import MenuItem from '../menuITem/MenuItem';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Nav = () => {

    const [open, setOpen] = useState(false)

    const menuItems = [
        { id: 1, menuName: 'Home', link: '/home' },
        { id: 2, menuName: 'Product', link: '/product' },
        { id: 3, menuName: 'Deals', link: '/deals' },
        { id: 4, menuName: 'Contact', link: '/contact' }
    ]
    return (
        <nav className='bg-indigo-300'>
            <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden'>
                {open ? <XMarkIcon></XMarkIcon> :<Bars3Icon></Bars3Icon>}
            </div>
            <ul className={`md:flex gap-9 justify-center text-2xl pb-2 md:static bg-indigo-300 w-full absolute duration-500 ease-in ${open ? 'top-6' : 'top-[-130px]'}`}>
                {
                    menuItems.map(item => <MenuItem
                        key={item.id}
                        menuITem={item}
                    ></MenuItem>)
                }
            </ul>
        </nav>
    );
};

export default Nav;