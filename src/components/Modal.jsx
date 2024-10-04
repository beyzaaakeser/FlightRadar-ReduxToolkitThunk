import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInfo } from '../redux/actions';
import Loader from './Loader';
import Error from './Error';
import formatDate from '../utils/formatDate';
import Tooltips from './Tooltips';
import { SlClose } from 'react-icons/sl';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { IoAirplaneOutline } from 'react-icons/io5';
import { GiAirplaneArrival, GiAirplaneDeparture } from 'react-icons/gi';

const Modal = ({ id, close }) => {
  const { isLoading, error, info } = useSelector((store) => store.info);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInfo(id));
  }, [id]);

  console.log(info);
  const images = info?.aircraft?.images?.large
    ? info.aircraft.images.large
    : info?.aircraft?.images?.medium
    ? info.aircraft.images.medium
    : info?.aircraft?.images?.thumbnails;

  const airportName = (text) => {
    if (!text) return 'Bilinmiyor';

    const words = text.split(' ');

    if (words[0].endsWith('.')) {
      return words.slice(0, 2).join(' ');
    } else {
      return words[0];
    }
  };

  const isVIP = !info?.aircraft?.registration || !info?.airline?.name;

  return (
    <div className="modal-outer">
      <div className="modal-inner">
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error msg={error} />
        ) : isVIP ? (
          <h3 className="error-container">Ozel Ucus</h3>
        ) : (
          info && (
            <div className="info ">
              <div className="modal-header mb-4 d-flex justify-content-between align-items-center">
                <div className="d-flex gap-3 align-items-center justify-content-center">
                  <Tooltips
                    desings={'text-warning fs-5'}
                    title={info.identification.callsign}
                    tooltipText={'Call Sing'}
                  />
                  <Tooltips
                    desings={'text-info fs-6'}
                    title={info.identification.number.default}
                    tooltipText={'Ucus Kodu'}
                  />
                  <Tooltips
                    desings={'text-success fw-bold fs-6'}
                    title={info.aircraft?.registration}
                    tooltipText={'Kuyruk Kodu'}
                  />
                </div>

                <SlClose onClick={close} size={'24px'} />
              </div>

              <div className="info-wrapper">
                <div className="d-flex  flex-column gap-2">
                  <h4>{info?.airline?.name}</h4>

                  <Splide
                    className="overflow-hidden rounded"
                    options={{ pagination: false }}
                  >
                    {images.map((image, index) => (
                      <SplideSlide key={index}>
                        <img
                          className="info-img rounded"
                          alt={info?.airline?.name}
                          src={image.src}
                        />
                      </SplideSlide>
                    ))}
                  </Splide>

                  <div className="d-flex align-items-center justify-content-between ">
                    <h5>{info.aircraft?.model?.text}</h5>
                    <h5>{info.aircraft?.model?.code}</h5>
                  </div>

                  <div className="d-flex position-relative border border-dark-subtle  justify-content-around  ">
                    <div className="d-flex p-2 text-center w-100  border border-dark-subtle flex-column ">
                      <span className={'text-warning fw-bold'}>
                        {info.airport?.origin?.code.iata}
                      </span>
                      <a
                        className="text-decoration-none text-white text-truncate "
                        href={info.airport?.origin?.website}
                        target="_blank"
                      >
                        <span className=" ">
                          {airportName(info.airport?.origin?.name)}
                        </span>
                      </a>
                    </div>

                    <div className="d-flex p-2 flex-column w-100 border border-dark-subtle  text-center align-items-center  justify-content-center ">
                      <span className={'text-warning fw-bold'}>
                        {info.airport?.destination?.code.iata}
                      </span>
                      <a
                        className="text-decoration-none text-white text-truncate "
                        href={info.airport?.destination?.website}
                        target="_blank"
                      >
                        <span className="">
                          {airportName(info.airport?.destination?.name)}
                        </span>
                      </a>
                    </div>

                    <div className="plane-icon">
                      <IoAirplaneOutline size={'32px'} />
                    </div>
                  </div>

                  <div className="d-flex w-100 justify-content-between ">
                    <div className="d-flex border justify-content-center align-items-center flex-column gap-1 w-100 ">
                      <p className="w-100 text-center pt-2 flex items-center justify-center gap-2">
                        <GiAirplaneDeparture color="dodgerblue" size="28px" />{' '}
                        <span>Departure</span>
                      </p>
                      <p className="fs-6 pb-2">
                        {' '}
                        {formatDate(info.time.scheduled.departure)}
                      </p>
                    </div>

                    <div className="d-flex border justify-content-center align-items-center flex-column gap-1 w-100">
                      <p className="w-100 text-center pt-2 flex gap-2 items-center justify-center">
                        <GiAirplaneArrival color="green" size="28px" />{' '}
                        <span>Arrival</span>
                      </p>
                      <p className="fs-6 pb-2">
                        {formatDate(info.time.scheduled.arrival)}
                      </p>
                    </div>
                  </div>
                </div>

                <p className={`alert ${info.status.icon}`}>
                  <span>{info.status.text}</span>
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Modal;
