"use strict";

import React, { Component } from 'react';

import MenuBar from '/src/menubar/components/index.js';
import WorkMat from './workmat.js';
import Modal from '/src/modal/components/modal.js';

class RankerRater extends Component {
  render() {
    return (
      <div
        style={{
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <MenuBar />
        <WorkMat />
        <Modal />
      </div>
    );
  }
}

export default RankerRater;
