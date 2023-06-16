import React from 'react'
import { SearchNormal1,Calendar2, MessageQuestion,Notification } from 'iconsax-react'
export default function Header() {
  return (
    <div className='flex flex-row justify-between h-[4.4rem] py-3 pl-8 border-b-2'>
    <div class="relative w-[26rem]">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <SearchNormal1 size="22" color="#787486"/>
        </div>
        <input type="text" id="simple-search" class="bg-[#F5F5F5] border-none text-gray-900 text-sm rounded-lg block w-full pl-10 px-2.5 h-[2.75rem] w-[26rem] focus:outline-none" placeholder="Search for anything..." required />
    </div>
    <div className='flex flex-row items-center'>
      <div className='flex flex-row items-center'>
      <Calendar2 size="24" color="#787486" className='mr-6'/>
      <MessageQuestion size="24" color="#787486" className='mr-6'/>
      <Notification  size="24" color="#787486" className='mr-8'/>
      </div>
      <div className='flex flex-row'>
        <div className='flex flex-col justify-end items-end'>
    <p className='text-base text-[#0D062D]'>Anima Agrawal</p>
    <p className='text-sm text-[#787486]'>
    U.P, India
    </p>
        </div>

      </div>
    </div>
    </div>
  )
}
