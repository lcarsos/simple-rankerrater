'use strict';

export const menu_button_style = {
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

export const menu_style = {
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

export const menu_item_style = {
  base: {
    listStyleType: 'none',
    minWidth: '130px',
    whiteSpace: 'nowrap',
  },
  entry: {
    paddingTop: '3px',
    paddingBottom: '3px',
    paddingLeft: '10px',
    paddingRight: '10px',
    ':hover': {
      backgroundColor: 'blue',
      color: 'white',
    }
  },
  sep: {
    paddingLeft: '10px',
    paddingRight: '10px',
  },
};
