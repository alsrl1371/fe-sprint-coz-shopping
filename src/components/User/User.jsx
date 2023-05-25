import React from 'react';

export default function User({ user: { displayName } }) {
  return (
    <div className='flex items-center'>
      <span className='hidden md:block'>{displayName}</span>
      님, 안녕하세요!
    </div>
  );
}
