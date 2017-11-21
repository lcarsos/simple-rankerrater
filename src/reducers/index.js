"use strict";

import { combineReducers } from 'redux';

import { REPLACE_DECK } from 'actions/deck';
import { SHOW_MODAL, HIDE_MODAL } from 'modal/constants';

import descriptorizer from './descriptorizer';

const deck = (state = [], action) => {
  switch (action.type) {
    case REPLACE_DECK:
      return action.deck;
    default:
      return state;
  }
};

const modal = (state = {visible: false, content: ''}, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        visible: true,
        content: action.content,
      };
    case HIDE_MODAL:
      return {
        visible: false,
        content: '',
      };
    default:
      return state;
  }
};

export default combineReducers({
  deck,
  descriptorizer,
  modal,
});
