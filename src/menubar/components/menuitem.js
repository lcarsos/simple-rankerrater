'use strict';

import React from 'react';
import { connect } from 'react-redux';

import { menu_item_style } from './style.js';

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => { dispatch(ownProps.onClick()); }
});

export const MenuItem = ({ text, onClick }) => (
  <li style={[ menu_item_style.base, menu_item_style.entry ]} onClick={onClick}>
    {text}
  </li>
);

export default connect(undefined, mapDispatchToProps)(MenuItem);
