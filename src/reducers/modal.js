'use strict';

import { SHOW_MODAL, HIDE_MODAL } from '/src/modal/constants.js';

const modal = (state = {visible: false, content: ''}, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        visible: true,
        content: action.content,
      };
    case HIDE_MODAL:
      return {
        visible: false,
        content: '',
      };
    default:
      return state;
  }
};

export default modal;
