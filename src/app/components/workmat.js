"use strict";

import React from 'react';

import Descriptorizer from '/src/descriptorizer/components/index.js';
import RankList from '/src/rank/components/ranklist.js';

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
