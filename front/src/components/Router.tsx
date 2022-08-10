import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './Login/Login';
import AdminHome from './Admin/Home';
import { AdminTemplate, Error } from './Core';

const Main = () => {
  return (
    <Routes>
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
