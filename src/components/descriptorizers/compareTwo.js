'use strict';

import { React } from 'react';

const CompareTwo = ({ cards, actions }) => (
  <div>
    <h1>Which is better?</h1>
    <div onClick={actions.chooseA}>
      {cards[0].name}
    </div>
    <div onClick={actions.chooseB}>
      {cards[1].name}
    </div>
  </div>
);

export default CompareTwo;
