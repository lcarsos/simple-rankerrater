"use strict";

import React, { Component } from 'react';
import Radium from 'radium';

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
    let deck = this.state.value.split(/\r?\n/);
    this.props.actions.upload(deck);
  }

  render() {
    return (
      <div id="load" style={[load_style.base]}>
        <div>
          <textarea
            placeholder='Paste a csv here'
            rows='40'
            cols='64'
            value={this.state.value}
            onChange={this.handleChange}
          />
        </div>
        <div style={{alignSelf: 'flex-end'}} >
          <button name="cancel" onClick={this.props.actions.cancel}>
            Cancel
          </button>
          {' '}
          <button name="upload" onClick={this.handleSubmit}>
            Upload Carddeck
          </button>
        </div>
      </div>
    );
  }
}

export default Radium(LoadDeck);
