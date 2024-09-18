import React from 'react';
import { NavLink } from 'react-router-dom';

const Buttons = () => {
  return (
    <div className="buttons">
      <NavLink to="/">
        <button>Map View</button>
      </NavLink>
      <NavLink to="/list">
        <button>List View</button>
      </NavLink>
    </div>
  );
};

export default Buttons;
