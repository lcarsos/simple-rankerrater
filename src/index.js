"use strict";

import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

import RankerRater from 'app/components/rankerrater';
import reducer from 'reducers';
import cardPicker from 'cardpicker';

render(
  <Provider store={
    createStore(
      reducer,
      undefined,
      applyMiddleware(cardPicker)
    )
  }>
    <RankerRater />
  </Provider>,
  document.getElementById('root')
);
