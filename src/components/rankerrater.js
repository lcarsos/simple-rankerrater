"use strict";

import React, { Component } from 'react';

import MenuBar from './menubar';
import WorkMat from './workmat';
import Modal from './modal';
import LoadDeck from './load';

class RankerRater extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShown: false,
      modalContent: '',
    };

    this.showLoadUI = this.showLoadUI.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  hideModal() {
    this.setState( () => ({modalShown: false, modalContent: ''}) );
  }

  showLoadUI() {
    this.setState( () => ({modalShown: true, modalContent: 'load'}) );
  }

  render() {
    let modal = '';
    if (this.state.modalShown) {
      modal = (
        <Modal actions={{cancel: this.hideModal}} >
          <LoadDeck actions={{cancel: this.hideModal}} />
        </Modal>
      );
    }
    return (
      <div
        style={{
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <MenuBar actions={{load: this.showLoadUI}} />
        <WorkMat />
        {modal}
      </div>
    );
  }
}

export default RankerRater;
