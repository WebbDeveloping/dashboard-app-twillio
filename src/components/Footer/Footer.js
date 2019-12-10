import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer id='main-footer' className='grid'>
        <div>Optimized Marketing, Inc</div>
        <div>
          Project By{' '}
          <a href='http://webbdevloping.com' target='_blank'>
            WebbDeveloping Inc.
          </a>
        </div>
      </footer>
    );
  }
}
