import React from 'react';

const Loader = () => {
  return (
    <div className=" w-[100%] h-[100%] grid place-items-center">
      <div className="loader">
        <span></span>

        <div id="dot-1" className="dot"></div>
        <div id="dot-2" className="dot"></div>
        <div id="dot-3" className="dot"></div>
        <div id="dot-4" className="dot"></div>
        <div id="dot-5" className="dot"></div>
      </div>
    </div>
  );
};

export default Loader;
