"use strict";

import React from 'react';
import Radium from 'radium';
import { connect } from 'react-redux';

import { hideModal } from 'modal/actions';
import { replaceDeck } from 'impexp/actions';
import LoadDeck from 'impexp/components/load';

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

export const ModalComponent = Radium( ({ children }) => (
  <div style={[modal_style.base]}>
    {children}
  </div>
));

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
