'use strict';

import React from 'react';

import { COMPARE_TWO } from 'actions/descriptorizer';
import Chooserater from 'containers/descriptorizers/chooserater';
import CompareTwo from 'containers/descriptorizers/compareTwo';

export const Descriptorizer = ({ descriptorizer }) => {
  switch (descriptorizer) {
    case COMPARE_TWO:
      return <CompareTwo />;
    default:
      return <Chooserater />;
  }
};
