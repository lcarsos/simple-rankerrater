"use strict";

import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import RankerRater from './components/rankerrater';
import reducer from './reducers';

const initial_state = {};

render(
  <Provider store={createStore(reducer)}>
    <RankerRater />
  </Provider>,
  document.getElementById('root')
);
