'use strict';

import { SHOW_DESCRIPTORIZER, COMPARE_TWO, PICK_FIVE } from '/src/descriptorizer/constants.js';

const numberPicker = (upperRange) => () => Math.floor( Math.random() * upperRange );

const cardPicker = (store) => (next) => (action) => {
  if ( action.type !== SHOW_DESCRIPTORIZER ) {
    return next(action);
  }

  let pick;
  switch (action.descriptorizer) {
    case COMPARE_TWO:
      pick = 2;
      break;
    case PICK_FIVE:
      pick = 5;
      break;
    default:
      return next(action);
  }

  const numCards = store.getState().deck.length,
    picker = numberPicker( numCards );
  let cards = [ picker() ];
  do {
    const nextCard = picker();
    if ( cards.indexOf( nextCard ) > -1 ) { continue; }
    cards = cards.concat( nextCard );
  } while (cards.length < pick);

  action = {
    ...action,
    cards: cards,
  };
  return next( action );
};

export default cardPicker;
