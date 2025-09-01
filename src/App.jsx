import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Stripes from './components/Stripes'
import Products from './components/Products'
import Marqees from './components/marqees'

function App() {
  return (
    <div className='w-full h-screen text-white bg-zinc-900'>
      <Navbar/>
      <Work/>
      <Stripes/>
      <Products/>
      <Marqees/>
    </div>
  )
  
}

export default App

