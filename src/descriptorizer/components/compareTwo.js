'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addRankDescriptor } from '/src/rank/actions.js';
import { showDescriptorizer } from '../actions.js';
import { CHOOSERATER } from '../constants.js';

const CompareTwo = ({ cards, dispatch }) =>
  <div>
    <h1>Which is better?</h1>
    <div onClick={ () => {
      dispatch(addRankDescriptor(
        cards[0].idx,
        cards[1].idx
      ));
      dispatch(showDescriptorizer(CHOOSERATER));
    } }>
      {cards[0].name}
    </div>
    <div onClick={ () => {
      dispatch(addRankDescriptor(
        cards[1].idx,
        cards[0].idx
      ));
      dispatch(showDescriptorizer(CHOOSERATER));
    } }>
      {cards[1].name}
    </div>
  </div>;
export const Component = CompareTwo;

CompareTwo.propTypes = {
  cards: PropTypes.arrayOf( PropTypes.shape({
    idx: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }) ).isRequired,
};

const mapStateToProps = (state) => ({
  cards: state.descriptorizer.cards.map( idx => ({ idx, name: state.deck[ idx ] }) ),
});

export default connect(mapStateToProps)(CompareTwo);
