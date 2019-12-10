import React, { Component } from 'react';
import './LearnMore.css';

export default class LearnMore extends Component {
  render() {
    return (
      <div className='learnMore__container'>
        <span>
          <img src='https://solarexclusive.org/hosted/images/b8/f003e024c711e9acc4b3b66330cb16/solar-exclusive-logo-horizontal.png' />
        </span>
        <div>
          <b>First Things First: 👇 Watch This👇</b>
        </div>
        <div class='thumbnail-container'>
          <div class='thumbnail'>
            <iframe
              className='video-a--main'
              src='https://embedwistia-a.akamaihd.net/deliveries/a63fc7482464af33fc2dc91faa85f1fb.webp?image_crop_resized=640x360'
              frameborder='0'
              allow='autoplay; encrypted-media'
              allowFullScreen
              title='video'
            ></iframe>
          </div>
        </div>
      </div>
    );
  }
}
