'use strict';

import { REPLACE_DECK } from 'impexp/constants';

const deck = (state = [], action) => {
  switch (action.type) {
    case REPLACE_DECK:
      return action.deck;
    default:
      return state;
  }
};

export default deck;
