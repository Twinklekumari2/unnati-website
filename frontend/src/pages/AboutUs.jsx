import React from 'react'
import Navbar from '../components/common/Navbar'
import NavUnn from '../components/common/NavUnn'
import HeroSection from '../components/pagesCompo/aboutus/HeroSection'
import Aboutus from '../components/pagesCompo/aboutus/Aboutus'
import Purpose from '../components/pagesCompo/aboutus/Purpose'

const AboutUs = () => {
  return (
    <div>
        <Navbar/>
        <NavUnn/>
        <HeroSection/>
        <Aboutus/>
        <Purpose/>
    </div>
  )
}

export default AboutUs