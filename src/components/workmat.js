"use strict";

import React from 'react';

import Descriptorizer from 'containers/descriptorizers/descriptorizer';
import RankList from './rankList';

const WorkMat = () => (
  <div id="workmat" style={{
    height: '100%',
    overflow: 'hidden',
  }}>
    <Descriptorizer />
    <RankList />
  </div>
);

export default WorkMat;
