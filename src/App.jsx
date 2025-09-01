import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Stripes from './components/Stripes'
import Products from './components/Products'

function App() {
  return (
    <div className='w-full h-screen text-white bg-zinc-900'>
      <Navbar/>
      <Work/>
      <Stripes/>
      <Products/>
    </div>
  )
  
}

export default App

