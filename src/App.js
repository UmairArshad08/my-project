import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import MyServices from './components/Services'
import Contact from './components/Contact'

const App = () => {
  return (
    <div>
<Navbar  />
<Hero/>
<About/>
<MyServices/>
<Contact/>
    </div>
  )
}

export default App