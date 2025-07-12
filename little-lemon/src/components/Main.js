import React from 'react';
import Booking from './Booking';
import Header from './Header';
import { Routes, Route, useNavigate } from 'react-router-dom';

const seedRandom = (seed) => {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    s = (s * a) % m;
    return s / m;
  };
};

const fetchAPI = (date) => {
  let result = [];
  let random = seedRandom(date.getDate());
  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(`${i}:00`);
    } else {
      result.push(`${i}:30`);
    }
  }
  return result;
};

const Main = () => {
  const initialState = { availableTime: fetchAPI(new Date()) };
  const [state, dispatch] = React.useReducer(updateTime, initialState);

  function updateTime(state, idate) {
    return { availableTime: fetchAPI(new Date()) };
  }

  const submitAPI = (formData) => {
    return true; // Return true to indicate success
  };

  const navigate = useNavigate();
  function submitForm(formData) {
    if (submitAPI(formData)) {
      navigate('/Confirmed');
    }
  }

  return (
    <main>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/booking" element={<Booking availableTime={state} dispatch={dispatch} SubmitForm={submitForm} />} />
        <Route path="/" element={<Header />} />
      </Routes>
    </main>
  );
};
export default Main;