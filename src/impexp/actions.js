'use strict';

import { REPLACE_DECK } from './constants';

export const replaceDeck = (deck) => ({
  type: REPLACE_DECK,
  deck,
});
