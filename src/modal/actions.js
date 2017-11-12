'use strict';

import { SHOW_MODAL, HIDE_MODAL } from './constants';

export const showModal = (content) => ({
  type: SHOW_MODAL,
  content,
});

export const showLoadModal = () => {
  return {
    type: SHOW_MODAL,
    content: 'load'
  };
};

export const hideModal = () => ({
  type: HIDE_MODAL,
});
