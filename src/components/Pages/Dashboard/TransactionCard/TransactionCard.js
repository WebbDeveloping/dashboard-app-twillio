import React from 'react';
import '../Dashboard.css';
import './TransactionsCard.css';
import TCard from './TCard';

export default function TransactionCard() {
  const profileImg4 =
    'https://themesbrand.com/veltrix/layouts/vertical-dark/assets/images/users/user-5.jpg';
  const profileImg3 =
    'https://themesbrand.com/veltrix/layouts/vertical-dark/assets/images/users/user-4.jpg';
  const profileImg2 =
    'https://themesbrand.com/veltrix/layouts/vertical-dark/assets/images/users/user-3.jpg';
  const profileImg =
    'https://themesbrand.com/veltrix/layouts/vertical-dark/assets/images/users/user-2.jpg';
  return (
    <div className='container-page'>
      <div className='card'>
        <div className='card-body'>
          <h4>Transactions</h4>
          <div className='table-responsive'>
            <table className='table table-hover'>
              <thead>
                <tr>
                  <th scope='col'>#Id</th>
                  <th scope='col'>Name</th>
                  <th scope='col'>Date</th>
                  <th scope='col'>Amount</th>
                  <th scope='col'>Edit</th>
                  <th scope='col'>Delete</th>
                </tr>
              </thead>
              <TCard img={profileImg} />
              <TCard img={profileImg2} />
              <TCard img={profileImg3} />
              <TCard img={profileImg4} />
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
