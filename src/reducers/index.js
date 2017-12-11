'use strict';

import { combineReducers } from 'redux';

import deck from './deck';
import descriptorizer from './descriptorizer';
import modal from './modal';

export default combineReducers({
  deck,
  descriptorizer,
  modal,
});
