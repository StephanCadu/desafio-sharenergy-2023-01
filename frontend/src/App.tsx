import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Users from './pages/Users';
import Cats from './pages/Cats';
import Dogs from './pages/Dogs';
import Clients from './pages/Clients';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={ <Login /> } />
        <Route path="/" element={ <Users /> } />
        <Route path="/cats" element={ <Cats /> } />
        <Route path="/dogs" element={ <Dogs /> } />
        <Route path="/clients" element={ <Clients /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
