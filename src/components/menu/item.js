'use strict';

import React from 'react';
import Radium from 'radium';

import { menu_item_style } from './style';

const MenuItem = Radium(({ text, action }) => (
  <li style={[ menu_item_style.base, menu_item_style.entry ]} onClick={action}>
    {text}
  </li>
));

export default MenuItem;
