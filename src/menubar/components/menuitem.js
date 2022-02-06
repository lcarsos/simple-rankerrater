'use strict';

import React from 'react';
import Radium from 'radium';
import { connect } from 'react-redux';

import { menu_item_style } from './style.js';

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => { dispatch(ownProps.onClick()); }
});

export const MenuItem = Radium( ({ text, onClick }) => (
  <li style={[ menu_item_style.base, menu_item_style.entry ]} onClick={onClick}>
    {text}
  </li>
) );

export default connect(undefined, mapDispatchToProps)(MenuItem);
