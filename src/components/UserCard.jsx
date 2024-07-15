import React from 'react'
import Rating from "../components/Rating";

const UserCard = ({name, rating, gender ,carrer ,location} ) => {


  return (
          
        <div className="flex flex-col bg-[#435eb5] text-white p-5 rounded-[15px] text-left w-1/4">
    
            <h2 className='font-extrabold text-[20px]'>{name}</h2>


            <Rating rating={rating}/>

            <p >{gender}</p>

            <p>{carrer}</p>

            <p>{location}</p>
    
        </div>

  )
}

export default UserCard