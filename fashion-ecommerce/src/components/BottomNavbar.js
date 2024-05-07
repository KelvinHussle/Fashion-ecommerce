import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const BottomNavbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black flex justify-around py-2 px-4 md:px-6 sm:invisible">
      <Link to="/" className="flex flex-col items-center text-white">
        <HomeIcon />
        <span className="text-sm">Home</span>
      </Link>
      <Link to="/favorites" className="flex flex-col items-center text-white">
        <FavoriteIcon />
        <span className="text-sm">Favorites</span>
      </Link>
      <Link to="/cart" className="flex flex-col items-center text-white">
        <ShoppingCartIcon />
        <span className="text-sm">Cart</span>
      </Link>
      <Link to="/profile" className="flex flex-col items-center text-white">
        <AccountCircleIcon />
        <span className="text-sm">Profile</span>
      </Link>
    </nav>
  );
};

export default BottomNavbar;
