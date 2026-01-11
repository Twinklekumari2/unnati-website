import React from 'react'
import Navbar from '../components/common/Navbar'
import NavUnn from '../components/common/NavUnn'
import HeroSection from '../components/pagesCompo/homepage/HeroSection'
import Aboutus from '../components/pagesCompo/homepage/Aboutus'
import Vision from '../components/pagesCompo/homepage/Vision'
import Program from '../components/pagesCompo/homepage/Program'
import Data from '../components/pagesCompo/homepage/Data'
import Conttibute from '../components/pagesCompo/homepage/Conttibute'

const Homepage = () => {
  return (
    <div>
        <Navbar/>
        <NavUnn/>
        <HeroSection/>
        <Aboutus/>
        <Vision/>
        <Program/>
        <Data/>
        <Conttibute/>
    </div>
  )
}

export default Homepage