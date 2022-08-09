import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Detail from './Detail/Detail';
import Listing from './Listing/Listing';
import Legals from './Legals/Legals';
import Politics from './Politics/Politics';
import Publish from './Publish/Publish';
import Login from './Login/Login';
import AdminHome from './Admin/Home';
import { AdminTemplate, Error, HomeTemplate } from './Core';

const Main = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <HomeTemplate>
            <Listing />
          </HomeTemplate>
        }
      />
      <Route
        path='/detail/:id/:name'
        element={
          <HomeTemplate>
            <Detail />
          </HomeTemplate>
        }
      />
      <Route
        path='/legals'
        element={
          <HomeTemplate>
            <Legals />
          </HomeTemplate>
        }
      />
      <Route
        path='/politics'
        element={
          <HomeTemplate>
            <Politics />
          </HomeTemplate>
        }
      />
      <Route
        path='/publish'
        element={
          <HomeTemplate>
            <Publish />
          </HomeTemplate>
        }
      />
      <Route path='/login' element={<Login />} />
      <Route
        path='/admin'
        element={
          <AdminTemplate>
            <AdminHome />
          </AdminTemplate>
        }
      />
      <Route
        path='*'
        element={<Error code={404} title='Pagina no encontrada' />}
      />
    </Routes>
  );
};

export default Main;
