import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src="/public/airplane2.png" alt="logo" />
        <h2>Flight Radar</h2>
      </Link>
      <h3>275 Flights Found</h3>
    </header>
  );
};

export default Header;
