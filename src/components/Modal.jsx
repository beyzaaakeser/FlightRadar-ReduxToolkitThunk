import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInfo } from '../redux/actions';
import Loader from './Loader';
import Error from './Error';
import formatDate from '../utils/formatDate';

const Modal = ({ detailId, close }) => {
  const { isLoading, error, info } = useSelector((store) => store.info);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInfo(detailId));
  }, [detailId]);

  console.log(info);

  const isVIP = !info.aircraft.registration || !info.airline?.name;

  return (
    <div className="fixed z-[9999] h-lvh top-0 left-0 flex items-center modal-outer max-sm:w-[100%] max-sm:bg-red-500">
      <div
        className="bg-black w-[380px] h-[95%] rounded-2xl flex flex-col 
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
        ) : isVIP ? (
          <p className=" w-[100%] h-[100%] grid place-items-center text-xl">
            The plane is a private plane. Flight information is hidden.
          </p>
        ) : (
          info && (
            <div className="h-[100%] flex flex-col justify-between pt-1 text-white">
              <div className="flex flex-col gap-2">
                <h2 className="my-1 text-2xl font-bold">
                  {info.aircraft.model.text}
                </h2>
                <h2 className="my-1 text-lg font-semibold">
                  {info.aircraft.model.code}
                </h2>

                <p className="flex gap-3 mb-2">
                  <span>Queue Code</span>
                  <span className="bg-blue-400 px-2 py-1 rounded-md font-bold capitalize text-white text-sm ">
                    {info.aircraft.registration}
                  </span>
                </p>
                <img src={info.aircraft.images.large[0].src} alt="" />
                <div className="bg-gray-400 p-4 text-black">
                  <p className="flex gap-3 py-2">
                    <span className="max-sm:w-1/3 sm:w-1/2 font-semibold">
                      Airline
                    </span>
                    <span className="max-sm:w-2/3 sm:w-1/2">
                      {info.airline?.name}
                    </span>
                  </p>
                  <p className="flex gap-3 py-2">
                    <span className="max-sm:w-1/3 sm:w-1/2  font-semibold">
                      Departure Airport
                    </span>
                    <a
                      href={info.airport.origin.website}
                      className="text-black max-sm:w-2/3 sm:w-1/2"
                      target="_blank"
                    >
                      {info.airport.origin.name}
                    </a>
                  </p>
                  <p className="flex gap-3 py-2">
                    <span className="max-sm:w-1/3 sm:w-1/2  font-semibold">
                      Arrival Airport
                    </span>
                    <a
                      className="text-black max-sm:w-2/3 sm:w-1/2"
                      href={info?.airport?.destination?.website}
                      target="_blank"
                    >
                      {info?.airport?.destination?.name}
                    </a>
                  </p>
                  <p className="flex gap-3 py-2">
                    <span className="max-sm:w-1/3 sm:w-1/2  font-semibold">
                      Departure Time
                    </span>
                    <span className="max-sm:w-2/3 sm:w-1/2">
                      {formatDate(info.time.scheduled.departure)}
                    </span>
                  </p>
                  <p className="flex gap-3 py-2">
                    <span className="max-sm:w-1/3 sm:w-1/2 font-semibold">
                      Arrival Time
                    </span>
                    <span className="max-sm:w-2/3 sm:w-1/2">
                      {formatDate(info.time.scheduled.arrival)}
                    </span>
                  </p>
                </div>
              </div>

              <p
                className={`flex gap-3 p-2 mt-4 rounded-xl font-bold justify-center bg-gray-400 ${info.status.icon}`}
              >
                <span>{info.status.text}</span>
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Modal;
