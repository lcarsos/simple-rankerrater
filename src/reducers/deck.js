'use strict';

import { REPLACE_DECK } from '/src/impexp/constants.js';

const deck = (state = [], action) => {
  switch (action.type) {
    case REPLACE_DECK:
      return action.deck;
    default:
      return state;
  }
};

export const getCard = (state, id) => state.deck[id];
export const getCards = (state, ids) => ids.map( id => getCard(state, id) );

export default deck;
