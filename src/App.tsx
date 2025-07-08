import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Project from './components/Project'
import Testimonials from './components/Testimonials'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Header/>
      <About/>
      <Project/>
      <Testimonials/>
      
    </div>
  )
}

export default App
