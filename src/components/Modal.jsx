import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInfo } from '../redux/actions';
import Loader from './Loader';
import Error from './Error';

const Modal = ({ detailId, close }) => {
  const { isLoading, error, info } = useSelector((store) => store.info);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInfo(detailId));
  }, []);

  return (
    <div className="fixed z-[9999] h-lvh top-0 left-0 flex items-center modal-outer max-sm:w-[100%] max-sm:bg-red-500">
      <div
        className="bg-black w-[300px] h-[95%] rounded-2xl flex flex-col 
      p-4 gap-3 shadow-2xl shadow-blue-500 ml-3 overflow-y-auto  modal-inner 
      max-sm:w-[100%] max-sm:h-[100%] max-sm:ml-0 max-sm:rounded-none"
      >
        <div className="flex justify-end">
          <button
            onClick={close}
            className="text-lg transition duration-500 cursor-pointer from-inherit font-bold border-none mb-0 px-3 py-1"
          >
            X
          </button>
        </div>

        {true ? (
          <Loader/>
        ) : error ? (
          <Error/>
        ) : (
          <>
            <div>
              <h1>uçak</h1>
            </div>

            <p>Uyarı</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
