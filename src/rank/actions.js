'use strict';

import { ADD_RANK_DESCRIPTOR } from './constants';

/**
 * This generates a Rank Description, which will be used to build a stronger
 * assertion of the true ranking.
 *
 * Read as: idA "is better than" idB
 */
export const addRankDescriptor = (idA, idB) => ({
  type: ADD_RANK_DESCRIPTOR,
  idA,
  idB
});
