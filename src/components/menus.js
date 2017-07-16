"use strict";

import React, { Component } from 'react';
import Radium from 'radium';

const menu_button_style = {
  base: {
    alignItems: 'center',
    backgroundColor: 'white',
    cursor: 'default',
    display: 'flex',
    listStyleType: 'none',
    paddingTop: '3px',
    paddingRight: '10px',
    paddingBottom: '3px',
    paddingLeft: '10px',
    position: 'relative',
    marginTop: '0',
    marginRight: '0',
    marginBottom: '0',
    marginLeft: '0',
    userSelect: 'none',
    ':hover': {
      backgroundColor: 'blue',
      color: 'white'
    }
  },
};
const menu_style = {
  base: {
    backgroundColor: 'white',
    border: '1px solid lightgrey',
    color: 'black',
    margin: 0,
    paddingTop: '3px',
    paddingRight: 0,
    paddingBottom: '3px',
    paddingLeft: 0,

    position: 'absolute',
    left: 0,
    top: '24px',
  },
  hidden: {
    display: 'none',
    opacity: 0,
    visibility: 'hidden',
  },
  shown: {
    opacity: 1,
    visibility: 'visible',
  }
};

const menu_item_style = {
  base: {
    listStyleType: 'none',
    minWidth: '130px',
    whiteSpace: 'nowrap',
    ':hover': {
      backgroundColor: 'blue',
      color: 'white',
    }
  },
  entry: {
    paddingTop: '3px',
    paddingBottom: '3px',
    paddingLeft: '10px',
    paddingRight: '10px',
  },
  sep: {
    paddingLeft: '10px',
    paddingRight: '10px',
  },
};

const MenuList = Radium(({ menu_list, visible }) => (
  <ul style={[ menu_style.base, visible ? menu_style.shown : menu_style.hidden ]} >
    {menu_list.map((item, i) =>
       item.type === 'entry' ? <MenuItem key={i} text={item.button} />
      : <MenuSeparator key={i} />
    )}
  </ul>
));

const MenuItem = Radium(({ text }) => (
  <li style={[ menu_item_style.base, menu_item_style.entry ]}>
    {text}
  </li>
));

const MenuSeparator = Radium(() => (
  <li style={[ menu_item_style.base, menu_item_style.sep ]}>
    <hr />
  </li>
));

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {shown: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState( prevState => ({shown: !prevState.shown}) );
  }

  render() {
    return (
      <li
        style={[menu_button_style.base, { [this.props.expand]: '3px' }]}
        onClick={this.handleClick}
      >
        {this.props.name}
        <MenuList menu_list={this.props.items} visible={this.state.shown} />
      </li>
    );
  }
}
export default Menu = Radium(Menu);
