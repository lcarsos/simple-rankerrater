'use strict';

import _ from 'lodash';

import { getCards } from 'selectors';

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

const includesAllOf = (list, arr) => {
  for (let to of arr) {
    if (!list.includes(to)) return false;
  }
  return true;
};

// TODO
const linearize = (graph, nodes) => {
  const coincident_nodes = nodes.filter( id => graph.node[id].in.length > 1 );
  let branches = nodes
    .filter( id => graph.node[id].in.length === 0 )
    .reduce(
      (a, v) => a.concat(graph.edge.filter(
        [from, to] => v === from
      ),
      []
    ));

  let list = [];
  let branch = 0;
  do {
    const [from, to] = branches[branch];
    list.concat(from);
    if (
      coincident_nodes.includes(to) && // Check we're on a join_op
      _.isEqual(branches[branch], [_.last(graph.node[to].in), to]) && // Check we're on the last branch
      includesAll(branches, graph.node[from].out) // Check we've gathered all branches
    ) {
      branch += 1;
    }

  } while (branches.length > 0);

  return list;
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
                  [key]: linearize( graph, val.concat(state.labels[labelB]) )
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
