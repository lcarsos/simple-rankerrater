'use strict';

import { getCards } from '/src/selectors.js';

import { ADD_RANK_DESCRIPTOR } from '/src/rank/constants.js';
import { REPLACE_DECK } from '/src/impexp/constants.js';

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

// TODO
const linearize = state => (a, b) => {
  return a - b;
};

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
                  [key]: val.concat( state.labels[labelB] ).sort( linearize(state) ),
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

export const getRankedCards = (state) =>
  Object.values(state.rank.labels)
    .filter( subgraph => subgraph.length > 1 )
    .sort( (a, b) => b.length - a.length )
    .map( subgraph => getCards(state, subgraph) );

export const getUnrankedCards = (state) => getCards(
  state,
  Object.values(state.rank.labels)
    .filter( subgraph => subgraph.length === 1 )
    .map( node => node[0] )
);

export default rank;
