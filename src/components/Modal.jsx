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

  console.log(info);

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

        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error msg={error} />
        ) : (
          info && (
            <div className="h-[100%] flex flex-col justify-between pt-5 text-white">
              <div className="flex flex-col gap-3">
                <h2 className='my-1'>{info.aircraft.model.text}</h2>
                <h2 className='my-1'>{info.aircraft.model.code}</h2>
                <p className="flex gap-3">
                  <span>Queue Code</span>
                  <span className='bg-blue-400 px-2 py-1 rounded-md font-bold capitalize text-white text-sm '>{info.aircraft.registration}</span>
                </p>
                <img src={info.aircraft.images.large[0].src} alt="" />
                <p className="flex gap-3">
                  <span>Airline</span>
                  <span className=''>{info.airline?.short}</span>
                </p>
                <p className="flex gap-3">
                  <span>Departure</span>
                  <a href={info.airport.origin.website} target='_blank'>{info.airport.origin.name}</a>
                </p>
                <p className="flex gap-3">
                  <span>Destination</span>
                  <a href={info?.airport?.destination?.website} target='_blank'>{info?.airport?.destination?.name}</a>
                </p>
              </div>

              <p className="flex gap-3">Uyarı</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Modal;
