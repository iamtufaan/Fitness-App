import React from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='  min-w-[1250px] min-h-screen text-white bg-gray-900'>
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App
