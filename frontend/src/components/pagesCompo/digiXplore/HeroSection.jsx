import React from 'react'
import digiXplore from './../../../assets/digiImage.png'
import bgImg from './../../../assets/imageDigi.png'

const HeroSection = () => {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat flex justify-between items-center min-h-[50vh] h-screen text-white" style={{backgroundImage:`url(${bgImg})`}}>
       <div className="absolute inset-0 z-10 bg-black/40"></div>
       <div className='z-20 flex flex-col justify-between items-center w-full'>
        <div className='flex justify-center items-center'>
            <div className='w-60 h-50 flex justify-center items-center'>
                <img src={digiXplore} alt="" />
            </div>
            <div>
                <h1 className='stick-no-bills-2 text-5xl text-white tracking-wider'>DIGIXPLORE</h1>
                <p className='stick-no-bills tracking-wider'>Empowering Setudents With Computer Skills And Digital Confidence To Explore A Smarter Future.</p>
            </div>
        </div>
        <div className='mr-10 flex flex-row gap-5 justify-center'>
            <div className='h-50 w-50 text-2xl flex justify-center items-center rounded-2xl bg-[#c3c3c3] border-8 border-white/35 text-black purple-purse-regular cursor-pointer text-center'>
                WORKSHOP <br /> 1
            </div>
            <div className='h-50 w-50 text-2xl flex justify-center items-center rounded-2xl bg-[#c3c3c3] border-8 border-white/35 text-black purple-purse-regular cursor-pointer text-center'>
                WORKSHOP <br /> 2
            </div>
            <div className='h-50 w-50 text-2xl flex justify-center items-center rounded-2xl bg-[#c3c3c3] border-8 border-white/35 text-black purple-purse-regular cursor-pointer text-center'>
                WORKSHOP <br /> 3
            </div>
            <div className='h-50 w-50 text-2xl flex justify-center items-center rounded-2xl bg-[#c3c3c3] border-8 border-white/35 text-black purple-purse-regular cursor-pointer text-center'>
                WORKSHOP <br /> 4
            </div>
        </div>
       </div>

    </section>
  )
}

export default HeroSection