'use strict';

import React from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';

const EpCard = ( props ) => (
  <Card style={{ width: '25rem' }}>
    <Card.Img variant="top" src={props.screenshot} />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>{props.synopsis}</Card.Text>
    </Card.Body>
  </Card>
);

const mapStateToProps = (state, { idx }) => ({
  ...state.deck[ idx ]
});

export default connect(mapStateToProps)(EpCard);
