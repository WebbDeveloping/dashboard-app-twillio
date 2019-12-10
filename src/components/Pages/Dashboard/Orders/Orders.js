import React from 'react';
import './Orders.css';
import TraffListItem from './TraffListItem';
import ToolBar from '../../../ToolBar/ToolBar';

export default function Orders() {
  return (
    <div className='container-page'>
      <div className='card'>
        <ToolBar />
        <h5 className='card-header'>Sales by traffic cource</h5>
        <div className='card-body p-0'>
          <ul className='list-group list-group-flush'>
            <TraffListItem
              source={'Direct'}
              amount={'$4000'}
              percent={'5.81%'}
            />
            <TraffListItem
              source={'Search'}
              amount={'$1200'}
              percent={'8.11%'}
            />
            <TraffListItem
              source={'Social'}
              amount={'$14000'}
              percent={'4.91%'}
            />
            <TraffListItem
              source={'Email'}
              amount={'$7400'}
              percent={'5.42%'}
            />
            <TraffListItem
              source={'Referrals'}
              amount={'$2200'}
              percent={'7.84%'}
            />
          </ul>
        </div>
        <div className='card-footer text-center'>
          <a href='/' className='btn-primary-link'>
            See Details
          </a>
        </div>
      </div>
    </div>
  );
}
