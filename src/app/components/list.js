"use strict";

import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return { episodes: state.deck.map( card => ({
    episode: card.episode,
    title: card.title
  } ) ) };
};

const CardDeck = ({ episodes }) => (
  <ul>
    {episodes.map( ep => (
      <li key={ep.episode}>{ep.title}</li>
    ))}
  </ul>
);

export default connect(mapStateToProps, undefined)(CardDeck);
