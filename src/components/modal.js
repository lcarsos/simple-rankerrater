"use strict";

import React, { Component } from 'react';
import Radium from 'radium';

const modal_style = {
  base: {
    backgroundColor: 'lightgrey',
    width: '600px',
    height: '700px',

    position: 'fixed',
    top: 'calc(50% - 400px)',
    left: 'calc(50% - 300px)',
  }
};

export class Modal extends Component {
  render() {
    return (
      <div style={[modal_style.base]}>
        {this.props.children}
      </div>
    );
  }
}

export default Modal = Radium(Modal);
