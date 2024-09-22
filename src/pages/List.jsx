import React from 'react';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loader from '../components/Loader';
import Error from '../components/Error';
const List = ({ setDetailId }) => {
  const { isLoading, error, flights } = useSelector((store) => store.flight);
  console.log(flights);

  if (isLoading) {
    return (
      <div className="list-loader">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="list-error">
        <Error msg={error} />
      </div>
    );
  }

  return (
    <div className="p-3 p-md-4">
      <table className="table table-dark table-striped table-hover table-responsive mt-5">
        <thead>
          <tr>
            <th>Id</th>
            <th>Tail Number</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight) => (
            <tr>
              <td>{flight.id}</td>
              <td>{flight.code}</td>
              <td>{flight.lat}</td>
              <td>{flight.lng}</td>
              <td>
                <button
                  onClick={() => setDetailId(flight.id)}
                  className="m-0 py-2 bg-black border-none text-white "
                >
                  Detail
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
