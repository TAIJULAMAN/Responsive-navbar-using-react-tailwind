import React, { useState } from 'react';
import Link from '../Link/Link';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
const Nav = () => {
    const routes =[
        {id:1,name:'home',link:'/home'},
        {id:2,name:'shop',link:'/shop'},
        {id:3,name:'catagory',link:'/catagory'},
        {id:4,name:'about',link:'/about'},
        {id:4,name:'deals',link:'/deals'}
    ]
    const [open, setOpen] = useState(false);
    return (
        <nav className='bg-lightblue-200'>
        <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden'>
            {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
        </div>
        <ul className={`md:flex justify-center absolute md:static bg-indigo-200 w-full duration-500 ease-in 
        ${open ? 'top-10': 'top-[-120px]'}`}>
            {
                routes.map(route => <Link 
                    key={route.id}
                    route={route}
                ></Link>)
            }
        </ul>
    </nav>
    );
};

export default Nav;