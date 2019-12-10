import React from 'react';
import '../SideDrawer/DrawerToggleButton.css';

export default function DrawerToggleButton(props) {
  return (
    <button className='toggle-button' onClick={props.click}>
      <div className='toggle-button__line' />
      <div className='toggle-button__line' />
      <div className='toggle-button__line' />
    </button>
  );
}
