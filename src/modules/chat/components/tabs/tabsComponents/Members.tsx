import React from 'react'

type Props = {}

export default function Members({}: Props) {
  return (
    <div className='w-full flex items-center'>
        <img  src='/image/1.jpg' className='w-[42px] h-[42px] rounded-full'/>
        <div className='flex flex-col ml-[14px]'>
            <p className='text-[var(--callsBarCallNameColor)] text-[16px] font-medium'>User name</p>
            <p className='text-[var(--callsBarCallDateColor)] text-[14px] font-normal'>Online</p>
        </div>
    </div>
  )
}