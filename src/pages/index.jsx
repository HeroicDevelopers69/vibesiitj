import React from 'react'
import Navbar from '../components/navbar'
import Feed from '../components/Feed'
import RightSideBar from '../components/RightSideBar'

const Index = () => {
  return (
    <div className='w-full grid grid-cols-12'>
        <Navbar/>
        <Feed/>
        <RightSideBar/>
    </div>
  )
}

export default Index