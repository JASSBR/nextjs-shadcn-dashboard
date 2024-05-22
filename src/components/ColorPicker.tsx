'use client';

import React from 'react'

const ColorPicker = ({ onColorSelect }:any) => {
    const colors = ['#0D0D0D', '#336B65', '#DFFD83', '#FF6F61', '#6B5B95'];

  return (
    <div className='flex gap-x-4 items-center'>
        <span className='text-xl font-bold'>Choose color</span>
        <div className='flex items-center bg-white gap-x-2 drop-shadow-md px-6 py-2 rounded-full'>
            {/* <span className='p-4 bg-teal-800 rounded-full'></span>
            <span className='p-4 bg-amber-500 rounded-full'></span>
            <span className='p-4 bg-lime-200 rounded-full'></span> */}
            {colors.map(color => (
          <span
            key={color}
            className='p-4 rounded-full cursor-pointer'
            style={{ backgroundColor: color }}
            onClick={() => onColorSelect(color)}
          ></span>
        ))}

        </div>
    </div>
  )
}

export default ColorPicker