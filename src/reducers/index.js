'use strict';

import { combineReducers } from 'redux';

import deck from './deck.js';
import descriptorizer from './descriptorizer.js';
import modal from './modal.js';
import rank from './rank.js';

export default combineReducers({
  deck,
  descriptorizer,
  modal,
  rank,
});
