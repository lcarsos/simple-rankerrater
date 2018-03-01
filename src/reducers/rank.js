'use strict';

import { ADD_RANK_DESCRIPTOR } from 'rank/constants';
import { REPLACE_DECK } from 'impexp/constants';

const default_node = {
  in: [],
  out: [],
};

const default_state = {
  edge: [],
  node: {},
  labels: {
  },
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

const inSubgraph = id => subgraph => subgraph[1].indexOf( id ) > -1;

const rank = (state = default_state, action) => {
  switch (action.type) {
    case ADD_RANK_DESCRIPTOR: {
      const newEdge = [action.idA, action.idB];

      if ( state.edge.indexOf( newEdge ) === -1 ) {
        const graph = {
          edge: state.edge.concat( [newEdge] ),
          node: nodes(state.node, newEdge),
        };

        const labelA = Object.entries(state.labels).find( inSubgraph( action.idA ) )[0],
          labelB = Object.entries(state.labels).find( inSubgraph( action.idB ) )[0];
        if ( labelA === labelB ) {
          return {
            ...graph,
            labels: state.labels,
          };
        }
        return {
          ...graph,
          labels: Object.entries(state.labels).reduce(
            (labels, [key, val]) => {
              if ( key === labelA ) {
                return {
                  ...labels,
                  [key]: val.concat( state.labels[labelB] ).sort(),
                };
              } else if ( key === labelB ) {
                return labels;
              }
              return {
                ...labels,
                [key]: val,
              };
            },
            {}
          ),
        };
      }
      return state;
    }
    case REPLACE_DECK: {
      return {
        ...default_state,
        labels: [ ...Array(action.deck.length).keys() ].reduce(
          (a, v) => ({
            ...a,
            [v]: [v], // use the value of v as the key, to an array with v as the only element
          }),
          {}
        ),
      };
    }
    default:
      return state;
  }
};

export default rank;
