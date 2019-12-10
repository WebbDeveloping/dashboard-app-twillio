import React, { Component } from 'react';
import './ContactForm.css';
import axios from 'axios';
import '../../../index.css';
import Main from '../../Main/Main';
import secB from '../../Main/Sections/secB';
import secC from '../../Main/Sections/secC';

export default class ContactForm extends Component {
  state = {
    name: '',
    phone: '',
    company: '',
    short: ''
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    console.log(11, 'hit on the front end');
    axios.post(`/api/lead`, this.state).then(res => {
      console.log('coming back');
    });
  };
  render() {
    return (
      <div>
        <header id='showcase' className='grid'>
          <div id='contactMainImg' className='contactMainImg'></div>
          <div className='content-wrap'>
            <h1>Contact Us!</h1>
            <p>
              Leave your Name, Company, and Phone Number and We Will Reach Out
              Shortly!
            </p>
            <a href='/' className='btn'>
              Home Page
            </a>
          </div>
        </header>

        <div className='wrapper'>
          <div className='card'>
            <div className='card-content col'>
              <h3 className='card-title'>Powered my Twillio**</h3>
              <div className='contact-form'>
                <div className='input-fields'>
                  <input
                    type='text'
                    className='input'
                    placeholder='Full Name'
                    name='name'
                    value={this.state.name}
                    onChange={e => this.change(e)}
                  />
                  <input
                    type='text'
                    className='input'
                    placeholder='Phone'
                    name='phone'
                    value={this.state.phone}
                    onChange={e => this.change(e)}
                  />
                  <input
                    type='text'
                    className='input'
                    placeholder='Company'
                    name='company'
                    value={this.state.company}
                    onChange={e => this.change(e)}
                  />
                  <button
                    className='btn btn--contact  btn-lrg-show'
                    onClick={e => {
                      this.onSubmit(e);
                    }}
                  >
                    Submit
                  </button>
                </div>
                <div className='msg'>
                  <textarea
                    name='short'
                    placeholder='Message'
                    value={this.state.short}
                    onChange={e => this.change(e)}
                  />
                </div>
                <button
                  id='lrg-screen-btn'
                  className='btn btn--contact input btn-sml'
                  onClick={e => {
                    this.onSubmit(e);
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <Main /> */}
        {/* <secB />
        <secC /> */}
      </div>
    );
  }
}
