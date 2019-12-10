import React, { Component } from 'react';
import '../Contact/ContactForm.css';
import axios from 'axios';
import '../../../index.css';
import './Login.css';

export default class Login extends Component {
  state = {
    email: '',
    password: ''
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    console.log('hit on the front end');
    // axios.post(`/api/login`, this.state).then(res => {
    //   console.log('coming back');
    // });
  };
  render() {
    return (
      <div>
        <header id='showcase' className='grid'>
          <div id='loginMainImg' className='loginMainImg'></div>
          <div className='content-wrap'>
            <h1>Login</h1>
            <p>Log into your account to access twilio stuff</p>
          </div>
        </header>
        <div className='wrapper login-wrapper'>
          <div className='card'>
            <div className='card-content col'>
              <h3 className='card-title'>Powered my Twillio**</h3>
              <div className='contact-form'>
                <div className='input-fields col'>
                  <input
                    type='text'
                    className='input'
                    placeholder='Email'
                    name='email'
                    // value={this.state.name}
                    onChange={e => this.change(e)}
                  />
                  <input
                    type='text'
                    className='input'
                    placeholder='Password'
                    name='password'
                    // value={this.state.name}
                    onChange={e => this.change(e)}
                  />
                  <button
                    className='btn btn--contact  btn-lrg-show align-input'
                    onClick={e => {
                      this.onSubmit(e);
                    }}
                  >
                    Submit
                  </button>
                </div>
                <button
                  id='lrg-screen-btn'
                  className='btn btn--contact input btn-sml'
                  onClick={e => {
                    this.onSubmit(e);
                  }}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
