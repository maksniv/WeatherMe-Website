import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Account from './pages/Account/Account';
import Home from './pages/Home/Home';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import NavBar from './components/NavBar/NavBar';
import Authorization from './pages/Authorization/Authorization';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/WeatherMe-Website" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/authorization" element={<Authorization />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
