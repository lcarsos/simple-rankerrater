'use strict';

import { SHOW_DESCRIPTORIZER, SET_DESCRIPTORIZER_CARDS } from 'descriptorizer/constants';

const default_state = {
  shown: '',
  cards: [],
};

const descriptorizer = (state = default_state, action) => {
  switch (action.type) {
    case SHOW_DESCRIPTORIZER:
      return {
        ...state,
        shown: action.descriptorizer,
        cards: action.cards
      };
    case SET_DESCRIPTORIZER_CARDS:
      return {
        ...state,
        cards: action.cards,
      };
    default:
      return state;
  }
};

export default descriptorizer;
