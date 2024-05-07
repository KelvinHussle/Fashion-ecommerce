import React from 'react';
import { Link } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Navbar = () => {
  return (
    <nav className="bg-black mx-auto max-w-full px-2 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className='h-16 flex justify-between px-6 relative'>

            {/* Your logo or brand */}
<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-white">
                Brand Logo
              </Link>
            </div>

         

            {/* Navigation links */}

            <div className="flex items-center hidden sm:-my-px sm:ml-6 sm:flex">
              <Link to="/" className='text-white px-4'>
                Home
              </Link>
              <Link to="/about" className='text-white px-4' >
                About
              </Link>
              <Link to="/products" className='text-white px-4'>
                Products
              </Link>
            </div>
</div>


{/*Search Icons */}
<div className='flex items-center ml-8'>
            <div className='w-50 h-8 bg-white rounded-full flex items-center sm:mr-10 sm:w-70'>
                <input
                    type="text"
                    name="search"
                    id="search"
                    className="flex-1 rounded-full bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 text-start text-sm sm:leading-6"
                    placeholder="What are you looking for?"
                  />

<button className="w-10 h-6 bg-black rounded-full items-center text-white mr-2 sm:w-20">
              <SearchOutlinedIcon/>
            </button>
            </div>
          <div className="flex items-center ">
</div>

{/*Other Icons */}
<div className='flex items-center invisible sm:visible'>
            <div className='flex items-center mx-6 hidden sm:-my-px sm:ml-6 sm:flex'>
<button className="text-white ">
            <FavoriteBorderIcon/>
            </button>
            <div className='rounded-full flex items-center bg-white p-1'><p className='text-sm'>0</p></div>
            </div>

                        <div className='flex items-center mx-6'>
<button className="text-white ">
            <ShoppingBagOutlinedIcon/>
            </button>
            <div className='rounded-full flex items-center bg-white p-1'><p className='text-sm'>0</p></div>
            </div>
            
            <button className="text-white mx-6">
                <AccountCircleOutlinedIcon/>
            </button>
          </div>
          </div>
          </div>
    </nav>
  );
};

export default Navbar;
