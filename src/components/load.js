"use strict";

import React from 'react';
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

const LoadDeck = ({ actions }) => (
  <div id="load" style={[load_style.base]}>
    <div>
      <textarea placeholder='Paste a csv here' rows='40' cols='64'>
      </textarea>
    </div>
    <div style={{alignSelf: 'flex-end'}} >
      <button name="cancel" onCancelClick={actions.cancel}>
        Cancel
      </button>
      {' '}
      <button name="upload" onLoadClick={actions.cancel}>
        Upload Carddeck
      </button>
    </div>
  </div>
);

export default Radium(LoadDeck);
