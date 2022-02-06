'use strict';

import { REPLACE_DECK } from './constants.js';

export const replaceDeck = (deck) => ({
  type: REPLACE_DECK,
  deck,
});
