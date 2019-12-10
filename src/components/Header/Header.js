import React from 'react';
import '../../index.css';

export default function Header() {
  return (
    <header id='showcase' className='grid'>
      <div className='bg-image'></div>
      <div className='content-wrap'>
        <h1>Our World has Changed</h1>
        <p>
          In a world where your customer checks their cell-phone 14 times a day,
          It's time we change too.
        </p>
        <a href='#section-b' className='btn'>
          Read More
        </a>
      </div>
    </header>
  );
}
