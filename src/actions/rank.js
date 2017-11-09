'use strict';

export const ADD_RANK_DESCRIPTOR = 'ADD_RANK_DESCRIPTOR';

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
