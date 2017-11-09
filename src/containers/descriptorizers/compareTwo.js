'use strict';

import { connect } from 'react-redux';

import { addRankDescriptor } from 'actions/rank';
import CompareTwo from 'components/descriptorizers/compareTwo';

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
