import React from 'react';

import SearchBar from './SearchBar.jsx';

import { Link } from 'react-router-dom';

function Nav({ onSearch }) {
  return (
    <nav className=" ">
      <Link to='/'>
      
    
      {/* <span className="navbar-brand">
        Weather App
      </span> */}
  </Link>

      {/* <Link to = "/about">About</Link>  */}
      


      <SearchBar
        onSearch={onSearch}
      />
    </nav>
  );
};

export default Nav;
