import React from 'react';

const Error = ({ msg }) => {
  return (
    <div className=" w-[100%] h-[100%] grid place-items-center text-center">
      <div>
        <h1>Ooppss..</h1>
        <h1>Something went wrong</h1>
        <p className=' mt-2 text-red-500'>{msg}</p>
      </div>
    </div>
  );
};

export default Error;
