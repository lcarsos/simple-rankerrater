"use strict";

import React from 'react';

import MenuBar from './menubar';
import WorkMat from './workmat';

const RankerRater = () => (
  <div
    style={{
      fontFamily: 'Arial, sans-serif',
    }}
  >
    <MenuBar />
    <WorkMat />
  </div>
);

export default RankerRater;
