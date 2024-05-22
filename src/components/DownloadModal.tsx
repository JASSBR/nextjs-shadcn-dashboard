import React from 'react'
import DownloadButton from './DownloadButton'
import Image from 'next/image'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

const DownloadModal = () => {
  return (
    <Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
  <div className='flex gap-x-3'>
        <div className='flex flex-col '>
            <h1>Download the Dashboard</h1>
            <p>Simply enter your email, and well whisk your dashboard straight to your inbox in a blink!</p>
            <input id="email" name="email" type="email" autoComplete='email'  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            <div>
            <fieldset>
          <div className="mt-6 space-y-6">
            <div className="flex items-center gap-x-3">
              <input id="push-everything" name="push-notifications" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
              <label  className="block text-sm font-medium leading-6 text-gray-900">Everything</label>
            </div>
            <div className="flex items-center gap-x-3">
              <input id="push-email" name="push-notifications" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
              <label  className="block text-sm font-medium leading-6 text-gray-900">Same as email</label>
            </div>
            <div className="flex items-center gap-x-3">
              <input id="push-nothing" name="push-notifications" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
              <label  className="block text-sm font-medium leading-6 text-gray-900">No push notifications</label>
            </div>
          </div>
        </fieldset>
            </div>
            <DownloadButton/>
        </div>
        <div>
            <Image src='/pic1.png' width={350} height={350} alt='' />
        </div>
    </div>
  </DialogContent>
</Dialog>
    
  )
}

export default DownloadModal