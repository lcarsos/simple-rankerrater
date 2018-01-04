'use strict';

import { ADD_RANK_DESCRIPTOR } from 'rank/constants';

const default_node = {
  in: [],
  out: [],
};

const default_state = {
  edge: [],
  node: {},
};

const node = (state, {_in = [], _out = []}) => ({
  in: state.in.indexOf( _in ) === -1 ? state.in.concat( _in ).sort() : state.in,
  out: state.out.indexOf( _out) === -1 ? state.out.concat( _out ).sort() : state.out,
});

const nodes = (state = {}, [idA, idB]) => ({
  ...state,
  [idA]: node( state[ idA ] || default_node, {_in: [idB]} ),
  [idB]: node( state[ idB ] || default_node, {_out: [idA]} ),
});

const rank = (state = default_state, action) => {
  switch (action.type) {
    case ADD_RANK_DESCRIPTOR: {
      const newEdge = [action.idA, action.idB];

      if ( state.edge.indexOf( newEdge ) === -1 ) {
        return {
          edge: state.edge.concat( [newEdge] ),
          node: nodes(state.node, newEdge),
        };
      }
      return state;
    }
    default:
      return state;
  }
};

export default rank;
