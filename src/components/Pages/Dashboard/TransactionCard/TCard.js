import React from 'react';
// import './TransactionCard.css';

export default function TCard(props) {
  return (
    <tbody>
      <tr>
        <th scope='row'>#123456</th>
        <td>
          <div>
            <img
              className='thumb-md rounded-circle mr-2'
              src={props.img}
              alt='words'
            />
            Brent
          </div>
        </td>
        <td>9/21/19</td>
        <td>$94</td>
        <td>
          {' '}
          <div>
            <img
              className='edit-img'
              src='https://image.flaticon.com/icons/svg/1160/1160515.svg'
              alt='words'
            />
          </div>
        </td>
        <td>
          {' '}
          <div>
            <img
              className='edit-img'
              src='https://image.flaticon.com/icons/svg/1632/1632708.svg'
              alt='words'
            />
          </div>
        </td>
      </tr>
    </tbody>
  );
}
