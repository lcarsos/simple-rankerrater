"use strict";

import React from 'react';
import { render } from 'react-dom';
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
    <RankerRater />
  </Provider>,
  document.getElementById('root')
);
