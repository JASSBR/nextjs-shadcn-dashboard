'use client'
import { Button } from '@material-tailwind/react'
import { ArrowDown } from 'lucide-react';
import React from 'react'


const DownloadButton = () => {
  return (
    <div className=''>
        <Button placeholder='' className='flex  items-center gap-x-5 rounded-full justify-between'>
            <div className='text-lg	'>Download
                </div>  
                
                <div className='bg-lime-300	rounded-full text-black text-4xl p-1.5 '><ArrowDown />
                    </div></Button>
    </div>
  )
}

export default DownloadButton