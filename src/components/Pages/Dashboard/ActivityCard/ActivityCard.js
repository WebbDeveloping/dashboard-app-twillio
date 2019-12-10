import React, { useState } from 'react';
import './ActivityCard.css';
import FeedItem from './FeedItem';
import ActivityForm from './ActivityForm';

export default function ActivityCard() {
  const [activity, setActivity] = useState([
    {
      date: 'Jan 28',
      text: 'Reply to church. Inform them we out. √'
    },
    {
      date: 'Feb 8',
      text: 'Good. We out'
    },
    {
      date: 'Apr 20',
      text: 'Have Killer Birthday & see grandma for 4/20. √'
    },
    {
      date: 'Oct 20',
      text: 'Forget half birthday √'
    },
    {
      date: 'Oct 28',
      text: 'But remember it on this day. √'
    }
  ]);

  const add_ = text => {
    const newA = [...activity, { text }];
    setActivity(newA);
  };

  return (
    <div className='activity-card'>
      <div className='card-body'>
        <h4 className='mt-0 mb-4 header-title'>Activity</h4>
        <ol className='activity-feed'>
          {activity.map((a, i) => {
            // console.log(i, a);
            return (
              <li className='feed-item'>
                <FeedItem
                  activity={a}
                  key={a.key}
                  date={a.date}
                  text={a.text}
                />
              </li>
            );
          })}
        </ol>

        <div className='text-center'>
          <span className='btn btn-primary' onClick={e => this.handleClick(e)}>
            Add More
          </span>
          <ActivityForm add={add_} />
        </div>
      </div>
    </div>
  );
}
