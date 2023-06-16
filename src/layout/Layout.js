import React from 'react'
import Header from '../components/Header'

import Sidebar from '../components/Sidebar'
export default function Layout({children}) {
  return (

    <div className='flex flex-row w-full'>

    <Sidebar />
    <div className='flex flex-col w-full ml-60'>

    <Header />
    {children}
    </div>
    </div>
  )
}
