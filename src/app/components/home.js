"use strict";

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import LoadDeck from '/src/impexp/components/load.js'

class Home extends Component {
  render() {
    return (
      <div
        style={{
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <h2>RankerRater</h2>
        <LoadDeck />
        <nav>
          <Link to="/rank">Get Ranking</Link>
          <Link to="/list">Show the list</Link>
        </nav>
      </div>
    );
  }
}

export default Home;
