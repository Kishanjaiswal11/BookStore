import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Contactme from '../components/Contactme'

function Contact() {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen'>
    <Contactme/>
    </div>
    <Footer/>
    </>
  )
}

export default Contact