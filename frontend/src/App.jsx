import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import AboutUs from './pages/AboutUs'
import WhatWeDo from './pages/WhatWeDo'
import Media from './pages/Media'
import MediaDigiXplore from './pages/MediaDigiXplore'
import Netritva from './components/pagesCompo/whatwedo/Netritva'
import MediaNetritva from './pages/MediaNetritva'
import MediaAkshar from './pages/MediaAkshar'

const App = () => {
  return (
    <div>
      <Routes>
         <Route path="/" element={<Homepage/>}/>
         <Route path="/about-us" element={<AboutUs/>}/>
         <Route path="/what-we-do" element={<WhatWeDo/>}/>
         <Route path="/media" element={<Media/>}/>
         <Route path="/media/digiXplore" element={<MediaDigiXplore/>}/>
         <Route path="/media/netritva" element={<MediaNetritva/>}/>
         <Route path="/media/akshar" element={<MediaAkshar/>}/>
      </Routes>
    </div>
  )
}

export default App