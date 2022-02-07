'use strict';

import React from 'react';
import { connect } from 'react-redux';

const Card = ( props, dispatch ) => (
  <div>
    <div>
      <img src={props.screenshot} />
    </div>
    <h3>{props.title}</h3>
    <p>{props.synopsis}</p>
  </div>
);

const mapStateToProps = (state, { idx }) => ({
  ...state.deck[ idx ]
});

export default connect(mapStateToProps)(Card);
