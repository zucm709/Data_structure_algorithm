import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'
import Home from '../components/Home'

const MainLayout = () => {
  return (
    <div className='flex flex-row gap-36'>
      <Navbar />
      {/* <Box overflow="hidden" flexGrow={1}> */}
      <div className='ml-72 mt-10'>
        {/* <Home /> */}
        <Outlet />
      </div>
      {/* </Box> */}
    </div>
  )
}

export default MainLayout
