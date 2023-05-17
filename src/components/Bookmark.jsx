import React, { useState } from 'react';
import { BsStar } from 'react-icons/bs';
import { BsStarFill } from 'react-icons/bs';

export default function Bookmark() {
  const [bookmark, setBookmark] = useState(false);

  const handleBookmark = () => {
    setBookmark(!bookmark);
  };
  return (
    <div>
      <div onClick={handleBookmark}>
        {bookmark ? (
          <BsStarFill className='text-2xl text-yellow-400' />
        ) : (
          <BsStar className='text-2xl text-yellow-400' />
        )}
      </div>
    </div>
  );
}
