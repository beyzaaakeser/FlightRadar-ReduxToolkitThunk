import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import List from './pages/List';
import Map from './pages/Map';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Buttons from './components/Buttons';
import { useDispatch } from 'react-redux';
import { getFlights } from './redux/actions';
import Modal from './components/Modal';

const App = () => {
  const [detailId, setDetailId] = useState(null);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFlights());
    const timer = setInterval(() => {
      dispatch(getFlights());
    }, 25000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleClick = () => { 
    setDetailId(null);
   }

  return (
    <BrowserRouter>
      <Header />
      <Buttons />
      <Routes>
        <Route path="/" element={<Map setDetailId={setDetailId} />} />
        <Route path="/list" element={<List setDetailId={setDetailId} />} />
      </Routes>

      {detailId && (
        <Modal id={detailId} close={handleClick} />
      )}
    </BrowserRouter>
  );
};

export default App;
