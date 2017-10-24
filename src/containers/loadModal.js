"use strict";

import { connect } from 'react-redux';

import { replaceDeck } from '../actions/deck';
import { hideModal } from '../actions/modal';
import loadModal from '../components/loadModal';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => {
  onLoadClick: () => {
    dispatch(replaceDeck(deck));
    dispatch(hideModal());
  }
};

const LoadModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(loadModal);

export default LoadModal;
