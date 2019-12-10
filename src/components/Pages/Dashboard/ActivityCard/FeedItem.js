import React from 'react';
import './ActivityCard.css';

export default function FeedItem(props) {
  return (
    <div className='feed-item-list'>
      <span className='date'>{props.date}</span>
      <span className='activity-text'>{props.text}</span>
    </div>
  );
}
