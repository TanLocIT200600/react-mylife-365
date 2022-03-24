import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Loading from './Components/Loading/loading';
import Layout from './HOC/Layout/Layout';
import Home from './pages/Home/home';
import Liver from './pages/Liver/liver';
import Login from './pages/Login/Login';
import Notifications from './pages/Notifications/notifications';
import Register from './pages/Register/Register';

function App() {
  return (
    <BrowserRouter>
      <Loading />
      <Routes>
        <Route path='/home' element={
          <Layout>
            <Home />
          </Layout>

        } />
        <Route path='/notifications' element={
          <Layout>
            <Notifications />
          </Layout>

        } />
        <Route path='/liver' element={
          <Layout>
            <Liver />
          </Layout>

        } />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
