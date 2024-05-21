import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './images/logo.png';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const[search, setSearch] = useState(false);
  const handleSearch = ()=>{
    setSearch(!search);
  }
  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <nav className="bg-white mx-auto max-w-full border-2 divide-y divide-gray-200 px-2 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className='h-16 flex justify-between items-center px-6 relative'>
        {/* Mobile Menu Toggle */}
        <button onClick={handleMenu} className='md:hidden'>
          {menu ? <CloseIcon /> : <MenuIcon />}
        </button>

        {/* Your logo or brand */}
        <div className="flex-shrink-0 mx-4">
          <Link to="/" className="text-grey">
            <img src={Logo}/>
          </Link>
        </div>

        

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/" className='text-gray-400 px-4'>
            Home
          </Link>
          <Link to="/about" className='text-gray-400 px-4'>
            About
          </Link>
          <Link to="/products" className='text-gray-400 px-4'>
            Products
          </Link>
        </div>

        {/* Search Bar */}

  {search &&(
<div className='w-1/2 h-8 bg-white rounded-full border-2 border-gray-200 flex items-center sm:w-1/4'>
          
            <input
              type="text"
              name="search"
              id="search"
              className="flex-1 rounded-full bg-transparent py-1.5 pl-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 text-sm sm:leading-6"
              placeholder="Search"
            />
    </div>
  )}            
     <button className="flex items-center justify-center text-white" onClick={handleSearch}>
    {search ? <CloseIcon sx={{ color: 'grey' }}/> :<SearchOutlinedIcon sx={{ color: 'grey' }}/>}
  </button>


        {/* Desktop Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-gray-400 px-6">
            <FavoriteBorderIcon sx={{ color: 'grey' }} />
          </button>
          <button className="text-gray-400 px-6">
            <ShoppingCartIcon sx={{ color: 'grey' }} />
          </button>
          <button className="text-gray-400 px-6">
            <AccountCircleOutlinedIcon sx={{ color: 'grey' }} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menu && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1">
          <Link to="/" className='block text-gray-400 px-4 py-2'>
            Home
          </Link>
          <Link to="/about" className='block text-gray-400 px-4 py-2'>
            About
          </Link>
          <Link to="/products" className='block text-gray-400 px-4 py-2'>
            Products
          </Link>
          <div className="flex justify-around pt-4">
            <button className="text-gray-400">
              <FavoriteBorderIcon sx={{ color: 'grey' }} />
            </button>
            <button className="text-gray-400">
              <ShoppingCartIcon sx={{ color: 'grey' }} />
            </button>
            <button className="text-gray-400">
              <AccountCircleOutlinedIcon sx={{ color: 'grey' }} />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
