import React from 'react'

const Button = ({ number, onClick }) => {
    let className = '';

    function isPrime(num) {
        if (num <= 1) return false;
        if (num === 2) return true;
        if (num % 2 === 0) return false;
        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i === 0) return false;
        }
        return true;
    }

    if (isPrime(number)) {
        className += 'flex justify-center items-center text-white text-[30px] size-[70px] cursor-pointer bg-red-500';
      } else if (number % 2 === 0) {
        className += 'flex justify-center items-center text-white text-[30px] size-[70px] cursor-pointer bg-green-500 ';
      } else {
        className += 'flex justify-center items-center text-white text-[30px] size-[70px] cursor-pointer bg-yellow-500';
      }

    return (
        <div className={className} onClick={() => onClick(number)}>
        {number}
      </div>
    );



}

export default Button