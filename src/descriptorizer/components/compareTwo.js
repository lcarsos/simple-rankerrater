'use strict';

import { React } from 'react';
import { connect } from 'react-redux';

import { addRankDescriptor } from 'rank/actions';

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
export const Component = CompareTwo;

const mapStateToProps = (state) => ({
  deck: state.deck,
  cards: getCardIds(state, 2),
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const [ idA, idB ] = ownProps.cardIds;

  return {
    actions: {
      chooseA: () => dispatch(addRankDescriptor(idA, idB)),
      chooseB: () => dispatch(addRankDescriptor(idB, idA)),
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CompareTwo);
