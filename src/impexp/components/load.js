"use strict";

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';

import { replaceDeck } from '../actions.js';
import { REPLACE_DECK } from '../constants.js';

const load_style = {
  base: {
    height: 'calc(100% - 48px)',
    padding: '24px',
    width: 'calc(100% - 48px)',

    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }
};

const mapDispatchToProps = (dispatch) => ({
  actions: {
    upload: deck => dispatch(replaceDeck(deck)),
  },
});

class LoadDeck extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit() {
    let deck = JSON.parse(this.state.value);
    this.props.actions.upload(deck);
  }

  render() {
    return (
      <div id="load" style={load_style.base}>
        <div>
          <textarea
            placeholder='Paste a csv here'
            rows='15'
            cols='64'
            value={this.state.value}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <Button onClick={() => this.handleSubmit()}>
            Upload Carddeck
          </Button>
        </div>
      </div>
    );
  }
}

export default connect(undefined, mapDispatchToProps)(LoadDeck);
