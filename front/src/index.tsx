import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { getFirestore } from 'firebase/firestore/lite';

import app from './firebase';
import FireBaseContext from './context/firebase-context';
import { Provider } from 'react-redux';
import store from './store';

const db = getFirestore(app);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <FireBaseContext.Provider value={{ db }}>
        <App />
      </FireBaseContext.Provider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
