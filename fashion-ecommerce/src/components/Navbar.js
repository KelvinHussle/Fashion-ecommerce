import React from 'react';
import { Link } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Navbar = () => {
  return (
    <nav className="bg-black max-w-screen-full h-16 flex justify-between px-6 ">

            {/* Your logo or brand */}

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



{/*Search Icons */}
<div className='flex items-center'>
            <div className='w-70 h-8 bg-white rounded-full flex items-center mr-10'>
                <input
                    type="text"
                    name="search"
                    id="search"
                    className="flex-1 rounded-full bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 text-start sm:text-sm sm:leading-6"
                    placeholder="What are you looking for?"
                  />

<button className="w-20 h-6 bg-black rounded-full items-center text-white mr-2">
              <SearchOutlinedIcon/>
            </button>
            </div>
          <div className="flex items-center ">
</div>

{/*Other Icons */}
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

    </nav>
  );
};

export default Navbar;
