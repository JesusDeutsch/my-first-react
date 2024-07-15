import React from 'react'
import Button from './Button';

const ButtonList = ({ numberOfButtons }) => {
  const handleClick = (number) => {
    console.log(`El numero es:  ${number}`);
  };

  const buttons = [];
  for (let i = 0; i <= numberOfButtons; i++) {
    buttons.push(
      <Button key={i} number={i} onClick={handleClick} />
    );
  }

  return (
    <div className='flex flex-wrap justify-center items-center w-[600px] h-[50px] gap-[1px]'>
      {buttons}
    </div>
  );
};

export default ButtonList




