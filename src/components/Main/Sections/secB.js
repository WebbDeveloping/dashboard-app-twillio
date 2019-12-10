import React, { Component } from 'react';
import '../../../index.css';

export default class secB extends Component {
  render() {
    return (
      <section id='section-b' className='grid'>
        <ul>
          <li>
            <div className='card'>
              <img
                src='https://static.pexels.com/photos/574077/pexels-photo-574077.jpeg'
                alt=''
              />
              <div className='card-content'>
                <h3 className='card-title'>Social Media Marketing</h3>
                <p>
                  With Facebook having over 2 billion active users & social
                  media advertising having one of the highest rutern rates in
                  marketing history, its time to jump on board.'(ill think of
                  something better)'
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className='card'>
              <img
                src='https://static.pexels.com/photos/261628/pexels-photo-261628.jpeg'
                alt=''
              />
              <div className='card-content'>
                <h3 className='card-title'>Mobile Applications</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum culpa neque quo eum et quasi velit voluptatum cum
                  maiores exercitationem.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className='card'>
              <img
                src='https://static.pexels.com/photos/265087/pexels-photo-265087.jpeg'
                alt=''
              />
              <div className='card-content'>
                <h3 className='card-title'>Tech Marketing</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum culpa neque quo eum et quasi velit voluptatum cum
                  maiores exercitationem.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </section>
    );
  }
}
