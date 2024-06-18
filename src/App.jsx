import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import AddItem from './AddItem';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';
import Reducer from './Reducer';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import { createStore } from 'redux';

function App() {

  const persistconfig = {
    key: 'root',
    storage
  };

  const persistred = persistReducer(persistconfig, Reducer);

  const store = createStore(persistred);

  const persist = persistStore(store);

  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persist}>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/additem' element={<AddItem />} />
          </Routes>
        </PersistGate>
      </Provider>
    </>
  )
}

export default App
