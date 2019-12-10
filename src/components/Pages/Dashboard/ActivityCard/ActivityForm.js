import React, { useState } from 'react';

function ActivityForm({ add }) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    add(value);
    setValue('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        className='input'
        value={value}
        placeholder={'add activity'}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}
export default ActivityForm;
