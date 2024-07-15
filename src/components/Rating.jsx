import React from 'react'
import { Star } from 'lucide-react';

const Rating = ( {rating}) => {




  return (
    <div className='flex'>
        {[...Array(5)].map((star,index) => (
          <Star
          key={index}
          size={30}
          className= {index < rating ? '   text-white fill-current ' : '  text-white-900'}
          />
        ))}
    </div>
  );
};

export default Rating
