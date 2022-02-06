'use strict';

import React from 'react';
import { connect } from 'react-redux';

import { getRankedCards, getUnrankedCards } from '/src/selectors.js';

const RankList = ({ ranked, unranked }) => (
  <div>
    { ranked.map(
      ( group, i ) => (
        <ul key={i}>
          { group.map(
            ( node, j ) => (
              <li key={j}>{node}</li>
            )
          ) }
        </ul>
      )
    ) }
    <h2>Unranked</h2>
    <ul>
      { unranked.map( (card, i) => <li key={i}>{card}</li> ) }
    </ul>
  </div>
);

const mapStateToProps = (state) => ({
  ranked: getRankedCards(state),
  unranked: getUnrankedCards(state),
});

export default connect(mapStateToProps)(RankList);
