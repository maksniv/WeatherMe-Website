import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Account from './pages/Account/Account';
import Home from './pages/Home/Home';
import Registration from './pages/Registration/Registration';
import PageNotFound from './pages/PageNotFound/PageNotFound';

function App() {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/account">Account</Link>
        <Link to="/registration">Registration</Link>
      </header>
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
