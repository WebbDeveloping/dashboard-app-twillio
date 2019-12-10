import React from 'react';
import { Link } from 'react-router-dom';
import './SideDrawer.css';

export default function SideDrawer(props) {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <div className='toolbar__logo'>
        <a href='/'>
          {/* <img src={'../../images/optimize.png'}></img> */}
          Optimized Marketing
        </a>
      </div>
      <hr />
      <div>
        <ul>
          <li>
            <Link onClick={props.close} to='/Register'>
              Register
            </Link>
          </li>
          <li>
            <Link onClick={props.close} to='/Testimonies'>
              Testimonies
            </Link>
          </li>
          <li>
            <Link onClick={props.close} to='/Login'>
              Login
            </Link>
          </li>
          <li>
            <Link onClick={props.close} to='/Contact'>
              Contact
            </Link>
          </li>
          <li>
            <Link onClick={props.close} to='/Dashboard'>
              Dashboard
            </Link>
          </li>
        </ul>
      </div>
      {/* <span onClick={props.close} className='close--drawer'>
        Close
      </span> */}
    </nav>
  );
}
