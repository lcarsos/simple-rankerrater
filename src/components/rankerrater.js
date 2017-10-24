"use strict";

import React, { Component } from 'react';

import MenuBar from './menubar';
import WorkMat from './workmat';
import Modal from '../containers/modal';

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
