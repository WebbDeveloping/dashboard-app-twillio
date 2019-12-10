import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';
import ToolBar from '../../ToolBar/ToolBar';

export default function Card(props) {
  var color;
  if (props.up === true) {
    color = 'bg-success';
  } else {
    color = 'bg-failure';
  }
  return (
    <div className='card'>
      <ToolBar />
      <div className='card-body'>
        <div className='mb-4'>
          <div className='float-left mini-stat-img mr-4'>
            <img
              className='clipboard'
              alt='clipboard'
              src='https://image.flaticon.com/icons/svg/443/443372.svg'
            />
          </div>
          <h5 className='font-16 text-uppercase mt-0'>{props.title}</h5>
          <h4 className='font-500 mt-0'>
            {props.num}
            {/* <i className='mdi mdi-arrow-up text-success ml-2'></i> */}
          </h4>
          <div className={`mini-stat-label ${color}`}>
            <p className='mb-0'>{props.num}</p>
          </div>
        </div>
        <div className='pt-2'>
          <div className='float-right'>
            <Link to={props.link}>
              {/* <i className='mdi mdi-arrow-up text-success ml-2'></i> */}
              <img
                className='arrow-img'
                src='https://image.flaticon.com/icons/svg/109/109617.svg'
                alt='arrow'
              />
            </Link>
          </div>
          <p className='text-white-50 mb-0'>Since Last Month</p>
        </div>
      </div>
    </div>
  );
}
