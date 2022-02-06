'use strict';

import React from 'react';
import { connect } from 'react-redux';

import { COMPARE_TWO } from '../constants.js';

import Chooserater from './chooserater.js';
import CompareTwo from './compareTwo.js';

const Descriptorizer = ({ descriptorizer }) => {
  switch (descriptorizer) {
    case COMPARE_TWO:
      return <CompareTwo />;
    default:
      return <Chooserater />;
  }
};
export const Component = Descriptorizer;

const mapStateToProps = (state) => ({
  descriptorizer: state.descriptorizer.shown,
});

export default connect(mapStateToProps)(Descriptorizer);
