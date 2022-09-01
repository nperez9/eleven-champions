import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Login, Home } from '../pages';
import { Error } from './Core';
import { PrivateRoute } from './Core/PrivateRoute';

const Main = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/login' element={<Login />} />
      <Route path='/panel' element={<Login />} />
      <Route path='/home' element={Home} />
      <Route
        path='*'
        element={<Error code={404} title='Pagina no encontrada' />}
      />
    </Routes>
  );
};

export default Main;
