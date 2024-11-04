import React from 'react'
import { NavbarMenu } from '../../mockData/data';
import { CiSearch } from 'react-icons/ci';
import { MdMenu } from 'react-icons/md';
import { FaList } from 'react-icons/fa';
import { GrTechnology } from "react-icons/gr";
import { PiShoppingCart } from 'react-icons/pi';
import { DiResponsive } from 'react-icons/di';

const Navbar = () => {
    const [open, setOpen] = React.useState(false);
  return (
    <>
        <nav>
            <div className="container flex justify-between items-center py-4">
                {/*Logo Section */}
                <a href="/">
                    <div className='text-2xl flex items-center gap-2 font-bold py-8 '>
                        <GrTechnology />
                        <p>Gen</p>
                        <p className='text-secondary'>TECH</p>
                    </div>
                </a>
                {/*Menu Section */}
                <div className='hidden md:block'>
                    <ul className='flex items-center gap-6 text-gray-600'>
                        {
                            NavbarMenu.map((item) => {
                                return <li key = {item.id}>
                                    <a href={item.link} className='inline-block py-1 px-3 hover:text-primary font-semibold'>{item.title}</a>
                                </li>;
                            })
                        }
                    </ul>
                </div>
                {/*Icons Section */}
                <div className='flex items-center gap-4'>
                    <button className='text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200'>
                        <CiSearch />
                    </button>
                    <button className='text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200'>
                        <PiShoppingCart />
                    </button>
                    <a href="/login">
                        <button className='hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary py-2 px-6 duration-200 hidden md:block'>
                            Login
                        </button>
                    </a>
                </div>
                {/*Mobile Hamburger Menu Section */}
                <div className='md:hidden' onClick={() => setOpen(!open)}>
                    <MdMenu className='text-4xl'/>
                </div>
            </div>
        </nav>

        {/*Mobile Sidebar Section */}
        
    </>
  );
};

export default Navbar;