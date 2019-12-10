import React, { Component } from 'react';
import '../Contact/ContactForm.css';
import axios from 'axios';
import '../../../index.css';

export default class Register extends Component {
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
    console.log('hit on the front end');
    axios.post(`/api/register`, this.state).then(res => {
      console.log('coming back');
    });
  };
  render() {
    return (
      <div>
        <header id='showcase' className='grid'>
          <div id='contactMainImg' className='contactMainImg'></div>
          <div className='content-wrap'>
            <h1>Register</h1>
            <p>we need your first born., and the blood of your enemies.</p>
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
                    placeholder='Email'
                    name='name'
                    value={this.state.name}
                    onChange={e => this.change(e)}
                  />
                  <input
                    type='text'
                    className='input'
                    placeholder='Password'
                    name='phone'
                    value={this.state.phone}
                    onChange={e => this.change(e)}
                  />
                  <input
                    type='text'
                    className='input'
                    placeholder='Confirm'
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
                    Register
                  </button>
                </div>
                {/* <div className='msg'>
                  <textarea
                    name='short'
                    placeholder='Message'
                    value={this.state.short}
                    onChange={e => this.change(e)}
                  />
                </div> */}
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
