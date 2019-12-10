import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import { Link } from 'react-router-dom';
import './Toolbar.css';

const ToolBar = props => (
  <header className='toolbar'>
    <nav className='toolbar__navigation'>
      <div className='toolbar__toggle-button'>
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className='toolbar__logo'>
        <a href='/'>Optmizied Marketing, Inc</a>
      </div>
      <div className='spacer' />
      <div className='toolbar__navigation-items'>
        <ul>
          <li>
            <Link to='/Register'>Register</Link>
          </li>
          <li>
            <Link to='/Testimonies'>Testimonies</Link>
          </li>
          <li>
            <Link to='/Login'>Login</Link>
          </li>
          <li>
            <Link to='/Contact'>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);
export default ToolBar;
