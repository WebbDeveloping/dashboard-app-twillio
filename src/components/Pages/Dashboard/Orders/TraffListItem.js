import React from 'react';
import './Orders.css';

export default function TraffListItem(props) {
  return (
    <li className='traffic-sales-content list-group-item'>
      <span className='traffic-sales-name'>{props.source}</span>
      <span className='traffic-sales-amount'>
        {props.amount}
        <span className='icon-circle-small icon-box-xs text-success bg-success-light'>
          <img
            alt='o'
            src='https://image.flaticon.com/icons/svg/59/59043.svg'
          />
        </span>
        <span className='ml-1 text-success'>{props.percent}</span>
      </span>
    </li>
  );
}
