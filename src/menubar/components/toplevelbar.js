"use strict";

import React from 'react';

import { showLoadModal } from 'modal/actions';
import Menu from './dropdown';

const left_menu = [
  {
    name: 'RankerRater',
    items: [
      { type: 'entry', button: 'Load', action: showLoadModal },
      { type: 'separator', },
      { type: 'entry', button: 'Import' },
      { type: 'entry', button: 'Export' }
    ],
  },
  {
    name: 'Deck',
    items: [
      { type: 'entry', button: 'Rank Categories' },
      { type: 'entry', button: 'Card Shape' },
    ],
  },
  {
    name: 'Help',
    items: [
      { type: 'entry', button: 'Glossary' },
      { type: 'entry', button: 'version' },
    ],
  },
];
const right_menu = [
  {
    name: 'GNDN',
    items: []
  },
  {
    name: 'GNDN',
    items: [],
  }
];

const MenuBar = ({ actions }) => (
  <div
    id='menu-bar'
    style={{
      'backgroundColor': 'gray',
      'display': 'flex',
      'flexDirection': 'row',
      'justifyContent': 'space-between',
      'margin': 0,
    }}
  >
    <MenuBarSection
      div_id='left-menu-bar'
      style={{
        alignment: 'center',
        expand: 'marginLeft',
        justification: 'flex-start',
        width: '20%',
      }}
      buttons={left_menu}
      actions={actions}
    />
    <div id='title-bar'
      style={{
        'backgroundColor': 'white',
        'border': '1px solid black',
        'width': '50%',
      }}
    ></div>
    <MenuBarSection
      div_id='right-menu-bar'
      style={{
        alignment: 'center',
        expand: 'marginRight',
        justification: 'flex-end',
        width: '20%',
      }}
      buttons={right_menu}
      actions={{}}
    />
  </div>
);

// TODO: change this so only 1 menu can be open
const MenuBarSection = ({ div_id, style, buttons, actions }) => (
  <ul
    id={div_id}
    style={{
      'alignItems': style.alignment,
      'display': 'flex',
      'justifyContent': style.justification,
      'margin': 0,
      'padding': 0,
      'width': style.width,
    }}
  >
    {buttons.map((button, i) => (
      <Menu
        key={i}
        name={button.name}
        expand={style.expand}
        items={button.items}
        actions={actions}
      />
    ))}
  </ul>
);

export default MenuBar;
