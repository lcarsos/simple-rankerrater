'use strict';

import React from 'react';
import Radium from 'radium';
import { connect } from 'react-redux';

import { menu_item_style } from '../components/menu/style';

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => { dispatch(ownProps.onClick()); }
});

let MenuItem = Radium(({ text, onClick }) => (
  <li style={[ menu_item_style.base, menu_item_style.entry ]} onClick={onClick}>
    {text}
  </li>
));

export default MenuItem = connect(undefined, mapDispatchToProps)(MenuItem);
