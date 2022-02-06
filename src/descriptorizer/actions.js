'use strict';

import { SHOW_DESCRIPTORIZER, SET_DESCRIPTORIZER_CARDS } from './constants.js';

export const showDescriptorizer = (descriptorizer) => ({
  type: SHOW_DESCRIPTORIZER,
  descriptorizer,
  cards: [],
});

export const setDescriptorizerCards = (cards) => ({
  type: SET_DESCRIPTORIZER_CARDS,
  cards,
});
