"use strict";

import React from 'react';

import Modal from './modal';
import LoadDeck from './load';

const LoadModal = (actions) => (
  <Modal>
    <LoadDeck actions={{actions}} />
  </Modal>
);

export default LoadModal;
