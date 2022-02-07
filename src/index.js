"use strict";

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';

import RankerRater from './app/components/rankerrater';
import reducer from './reducers';
import cardPicker from './cardpicker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

render(
  <Provider store={
    createStore(
      reducer,
      undefined,
      composeEnhancers( applyMiddleware( cardPicker ) )
    )
  }>
    <BrowserRouter>
      <RankerRater />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
