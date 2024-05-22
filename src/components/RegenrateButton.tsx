'use client'
import { Button } from '@material-tailwind/react'
import { RefreshCcw } from 'lucide-react';
import React from 'react'


const RegenerateButton = () => {
  return (
    <div className='flex flex-col gap-y-4 justify-center items-center'>
        <h5 className='text-lg'>Not satisfied by the result, regenerate an other.</h5>
        <Button placeholder='' className='flex bg-lime-300 items-center gap-x-5 rounded-full justify-between'>
            <div className='text-lg	text-black'>Regenerate</div>  
            <div className='bg-white rounded-full text-black text-4xl p-1.5 '><RefreshCcw /></div>
        </Button>
    </div>
  )
}

export default RegenerateButton