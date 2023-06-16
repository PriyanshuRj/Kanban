import React,{useState} from 'react'
import Header from '../components/Header'
import {ArrowRight2} from 'iconsax-react'
import Sidebar from '../components/Sidebar'
export default function Layout({children}) {
  const [sidebarState, setSidebarOpen] =useState(true);
  return (

    <div className='flex flex-row w-full'>

    <Sidebar sidebarState={sidebarState} setSidebarOpen={setSidebarOpen}/>
    <div className={`flex flex-row cursor-pointer absolute top-5 left-5 z-20 p-2 bg-[#D3D3D3]  rounded-xl items-center w-10 h-10 ${sidebarState && 'hidden'}`} onClick={()=> setSidebarOpen(true)}>

<ArrowRight2 size="20" color="#787486" variant="Outline" className='-mr-3' />
<ArrowRight2 size="20" color="#787486" variant="Outline" />
</div>
    <div className={`flex flex-col w-full ${sidebarState && 'lg:ml-60'}  `}>

    <Header />
    {children}
    </div>
    </div>
  )
}
