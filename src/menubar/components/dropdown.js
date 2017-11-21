"use strict";

import React, { Component } from 'react';
import Radium from 'radium';

import { menu_button_style, menu_style, menu_item_style } from './style';
import MenuItem from './menuitem';

const MenuList = Radium( ({ menu_list, visible, actions }) => (
  <ul style={[ menu_style.base, visible ? menu_style.shown : menu_style.hidden ]} >
    {menu_list.map((item, i) => {
      switch (item.type) {
        case 'entry':
          return (
            <MenuItem
              key={i}
              text={item.button}
              onClick={item.action != null ? item.action : () => {} }
            />);
        case 'separator':
          return <MenuSeparator key={i} />;
        default:
          return null;
      }
    })}
  </ul>
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
        <MenuList
          menu_list={this.props.items}
          visible={this.state.shown}
          actions={this.props.actions}
        />
      </li>
    );
  }
}
export default Radium(Menu);
