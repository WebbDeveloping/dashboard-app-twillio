import React, { useState, useReducer } from 'react';
import { useInput } from './useInput';

const initialState = {
  title: '',
  up: true,
  num: '',
  link: ''
};

export default function CardForm({ addCard }) {
  const { value: title, bind: bindTitle, reset: resetTitle } = useInput('');
  //   const { value: up, bind: bindUp, reset: resetUp } = useInput(false);
  const { value: num, bind: bindNum, reset: resetNum } = useInput('');
  const { value: link, bind: bindLink, reset: resetLink } = useInput('');
  const [up, setUp] = useState(false);

  const handleSubmit = evt => {
    // console.log(evt);
    evt.preventDefault();

    addCard({ title, up, num, link });
    resetTitle();
    resetNum();
    resetLink();
    // resetUp();
  };
  const handleCheck = event => {
    // up = event.target.checked;
    console.log(1, up);
    setUp({ [event.target.name]: event.target.checked });
    console.log('checkedItems: ', up);
  };
  {
    console.log(up);
  }
  return (
    <div>
      <form
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={handleSubmit}
      >
        <input
          type='text'
          className='input'
          name='title'
          placeholder={'Title'}
          {...bindTitle}
        />
        <label>
          <input
            id='hell'
            type='checkbox'
            name='up'
            checked='true'
            onChange={handleCheck}
          />
          Profit
        </label>
        <input
          type='text'
          className='input'
          placeholder={'Num'}
          name='num'
          {...bindNum}
        />
        <input
          type='text'
          className='input'
          placeholder={'Link'}
          name='link'
          {...bindLink}
        />
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
}
