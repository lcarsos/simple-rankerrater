'use strict';

import { SHOW_DESCRIPTORIZER } from 'actions/descriptorizer';

const descriptorizer = (state = {shown: ''}, action) => {
  switch (action.type) {
    case SHOW_DESCRIPTORIZER:
      return {
        shown: action.descriptorizer
      };
    default:
      return state;
  }
};

export default descriptorizer;
