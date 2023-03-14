import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Account from './pages/Account/Account';
import Home from './pages/Home/Home';
import Registration from './pages/Registration/Registration';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
