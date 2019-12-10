import React, { useState } from 'react';
import './Dashboard.css';
import Card from './Card';
import ActivityCard from './ActivityCard/ActivityCard';
import TransactionCard from './TransactionCard/TransactionCard';
import CardForm from './CardForm';

export default function Dashboard() {
  const [value, setValue] = useState([
    {
      title: 'Orders',
      up: true,
      num: '+12.8',
      link: '/Orders'
    },
    {
      title: 'Sales',
      up: false,
      num: '-2.3',
      link: '/Transactions'
    },
    {
      title: 'Reviews',
      up: true,
      num: '+12.8',
      link: '/Testimonies'
    }
  ]);

  const addCard = text => {
    // console.log('text', text);
    const newC = [...value, text];
    // console.log(newC);
    setValue(newC);
  };

  return (
    <div id='wrapper'>
      <div className='content-page'>
        <div className='content'>
          <div className='container-fluid'>
            <div className='page-title-box'>
              <div className='col align-items-center'>
                <div className='col flex-col align-left'>
                  <h2 className='page-title title-text'>Dashboard</h2>
                  <h4 className='page-title title-desc'>
                    Welcome to my Vortex Dashboard
                  </h4>
                </div>
              </div>
            </div>
            {/* END TITLE */}
            <div className='row xl-row'>
              {value.map((v, i) => {
                // console.log('2', i, v);
                return (
                  <div className='col'>
                    <Card title={v.title} up={v.up} num={v.num} link={v.link} />
                  </div>
                );
              })}
              <CardForm addCard={addCard} />
            </div>

            <ActivityCard />
            <br />
            <TransactionCard />
          </div>
        </div>
      </div>
    </div>
  );
}
