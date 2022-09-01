import React from 'react';
import SearchBar from './SearchBar.jsx';

function Nav({ onSearch }) {
  return (
    <nav >
      <SearchBar
        onSearch={onSearch}
      />
    </nav>
  );
};

export default Nav;
