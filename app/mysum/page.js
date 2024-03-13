"use client"

import React, { useState } from 'react'

const MySumPage = () => {

    const clickhandler = async () => {
        // POST /api/mysum
        // Update Result
    }
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center bg-gray-400'>
    <div className='flex gap-4 flex-col w-[350px] bg-gray-100 p-2 rounded-md'>
        <input className='text-center' type="number"  />
        <input className='text-center' type="number"  />
        <button className='px-2 py-1.5 bg-black text-white w-1/2 rounded-md mx-auto' >Submit</button>
    </div>
    <div className='mt-5 flex gap-4 justify-between w-[350px] bg-gray-100 p-2 px-6 rounded-md'>
        <span>Result</span>
        <span>{}</span>
    </div>
    </div>
  )
}

export default MySumPage