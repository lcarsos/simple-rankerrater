"use strict";

import React from 'react';
import { connect } from 'react-redux';

import { hideModal } from '../actions/modal';
import { replaceDeck } from '../actions/deck';
import ModalComponent from '../components/modal';
import LoadDeck from '../components/load';

const mapStateToProps = ({ modal }) => ({
  visible: modal.visible,
  content: modal.content
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    cancel: () => {
      dispatch(hideModal());
    },
    upload: (deck) => {
      dispatch(replaceDeck(deck));
      dispatch(hideModal());
    }
  }
});

let Modal = ({ visible, content, actions }) => {
  console.log('rendering modal');
  console.log(`visible: ${visible}`);
  console.log(`contents: ${content}`);
  if (!visible) {
    return null;
  }

  switch (content) {
    case 'load':
      return (
        <ModalComponent>
          <LoadDeck actions={{cancel: actions.cancel, upload: actions.upload}} />
        </ModalComponent>
      );
    default:
      return null;
  }
};
Modal = connect(mapStateToProps, mapDispatchToProps)(Modal);

export default Modal;
