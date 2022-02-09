'use strict';

import React from 'react';
import { connect } from 'react-redux';

import Card from '/src/card/components/index.js';
//import { addRankDescriptor } from '/src/rank/actions.js';
//import { showDescriptorizer } from '../actions.js';
//import { CHOOSERATER } from '../constants.js';

const CompareTwo = ({ cards, dispatch }) =>
  <div>
    <h1>Which is better?</h1>
    <div>
      <Card idx={22} />
    </div>
    <div>
      <Card idx={1} />
    </div>
  </div>;
export const Component = CompareTwo;

const mapStateToProps = (state) => ({
  cards: [],
});

export default connect(mapStateToProps)(CompareTwo);
