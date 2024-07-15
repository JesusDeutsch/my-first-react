import React, { useState } from 'react'
import {MousePointerClick}  from 'lucide-react';
import {RotateCcw}  from 'lucide-react';
import {Plus}  from 'lucide-react';
import {Minus}  from 'lucide-react';

const Counter = () => {

    const [count, setCount] = useState(0)
    
    const increment = () => setCount(count + 1)
    const decrement = () => { 
        if (count > 0) {
            setCount(count - 1)}
        }
    const reset = () => setCount(0)
    

  return (
    <div className='flex flex-col justify-center items-center m-6 border-s-violet-50 '>
        <div className='flex justify-center items-center bg-[#333940] text-white w-[500px] h-[50px] text-[30px] mb-6 gap-2'><MousePointerClick size={40}/> Clicker</div>

        <div className='flex flex-col border border-black w-[460px]'>
        <div className='flex justify-center items-center w-[450px] h-[350px] text-[150px]'>{count}</div>
        <div className='flex flex-wrap items-center justify-center'>
        <div onClick={increment} className='flex items-center justify-center size-[150px] bg-[#24a645] rounded-md text-white cursor-pointer'><Plus size={50}/></div>
        <div onClick={reset} className='flex items-center justify-center size-[149.1px] bg-[#ffc108] rounded-md text-black cursor-pointer'><RotateCcw size={50}/></div>
        <div onClick={decrement} className='flex items-center justify-center size-[149.5px] bg-[#db3545] rounded-md text-white cursor-pointer'><Minus size={50}/></div>
        </div>


        </div>

<div></div>
    </div>
  )
}

export default Counter