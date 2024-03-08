import { useState } from 'react'
import BlogApp from './components/BlogApp'
import Navbars from './pages/Navbars'
import Membership from './pages/Membership'
import Newsletter from './pages/Newsletter'
import Footer from './components/Footer'


function App() {


  return (
    <>
    <Navbars/>
    <Membership/>
    <Newsletter/>
    <Footer/>
    </>
  )
}

export default App
