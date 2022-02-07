"use strict";

import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './home.js';
import Rank from './rank.js';
import List from './list.js';
//import WorkMat from './workmat.js';
//import Modal from '/src/modal/components/modal.js';

class RankerRater extends Component {
  render() {
    return (
      <div
        style={{
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/rank" element={ <Rank /> } />
          <Route path="/list" element={ <List /> } />
        </Routes>
      </div>
    );
  }
}

export default RankerRater;
