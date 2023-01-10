import React from 'react';
import './App.css';
// import Provider from './context/Provider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Users from './pages/Users';
// import Cats from './pages/Cats';
// import Dogs from './pages/Dogs';
// import Clients from './pages/Clients';

function App() {
  return (
    // <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={ <Login /> } />
          <Route path="/" element={ <Users /> } />
          {/* <Route path="/" element={ <Cats /> } /> */}
          {/* <Route path="/" element={ <Dogs /> } /> */}
          {/* <Route path="/" element={ <Clients /> } /> */}
        </Routes>
      </BrowserRouter>
    // </Provider>
  );
}

export default App;
