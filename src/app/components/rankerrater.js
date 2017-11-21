"use strict";

import React, { Component } from 'react';

import MenuBar from 'menubar/components';
import WorkMat from './workmat';
import Modal from 'modal/components/modal';

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
