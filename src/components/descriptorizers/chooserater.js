'use strict';

import React from 'react';
import Radium from 'radium';

const style = {
  base: {
    backgroundColor: 'gray',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: '25px',
    fontSize: '40px',
    height: '130px',
    margin: '5px',
    width: '130px',
    ':hover': {
      backgroundColor: 'lightgrey',
      cursor: 'pointer',
    }
  },
  container: {
    alignItems: 'center',
    cursor: 'default',
    display: 'flex',
    justifyContent: 'center',
    userSelect: 'none',
  }
};

const Chooserater = ({ actions }) => (
  <div style={style.container}>
    <div key={1} style={style.base} onClick={actions.compareTwo}>A/B</div>
    <div key={2} style={style.base} onClick={actions.pickFive}>Pick 5</div>
  </div>
);

export default Radium(Chooserater);
