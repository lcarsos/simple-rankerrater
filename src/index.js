"use strict";

import React from 'react';
import { render } from 'react-dom';
import RankerRater from './components/rankerrater';

const initial_state = {};

render(
  <RankerRater carddeck={initial_state} />,
  document.getElementById('root')
);
