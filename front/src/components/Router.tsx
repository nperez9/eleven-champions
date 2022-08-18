import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Login } from '../pages';
import AdminHome from './Admin/Home';
import { AdminTemplate, Error } from './Core';

const Main = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
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
