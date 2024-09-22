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
  console.log(detailId);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFlights());
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Buttons />
      <Routes>
        <Route path="/" element={<Map setDetailId={setDetailId} />} />
        <Route path="/list" element={<List setDetailId={setDetailId} />} />
      </Routes>

      {detailId && (
        <Modal detailId={detailId} close={() => setDetailId(null)} />
      )}
    </BrowserRouter>
  );
};

export default App;
