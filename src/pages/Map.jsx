import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useSelector } from 'react-redux';
import DetailButton from '../components/DetailButton';
import { icon } from 'leaflet';
const Map = () => {
  const { isLoading, error, flights } = useSelector((store) => store.flight);

  const planeIcon = icon({
    iconUrl: '/public/plane.png',
    iconSize: new L.Point(25, 25),
  });

  return (
    <MapContainer
      center={[39.197953, 35.412556]}
      zoom={6}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {flights.map((flight, index) => (
        <Marker
          key={index}
          position={[flight.lat, flight.lng]}
          icon={planeIcon}
        >
          <Popup>
            <div className="popup">
              <span>Code: {flight.code}</span>
              <DetailButton />
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
