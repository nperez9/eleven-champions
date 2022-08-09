import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Main from './components/Router';
import style from './App.module.scss';

const App = () => {
  return (
    <section className={`${style.App}`}>    
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </section>
  );
};

export default App;
