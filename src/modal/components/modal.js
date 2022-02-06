"use strict";

import React from 'react';
import { connect } from 'react-redux';

import { hideModal } from '../actions.js';
import { replaceDeck } from '/src/impexp/actions.js';
import LoadDeck from '/src/impexp/components/load.js';

const modal_style = {
  base: {
    backgroundColor: 'lightgrey',
    width: '600px',
    height: '700px',

    position: 'fixed',
    top: 'calc(50% - 400px)',
    left: 'calc(50% - 300px)',
  }
};

export const ModalComponent = ({ children }) => (
  <div style={[modal_style.base]}>
    {children}
  </div>
);

export const Modal = ({ visible, content, actions }) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
