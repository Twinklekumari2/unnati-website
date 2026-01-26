import React from 'react'
import Akshar from './../../../assets/aksharImg.png'
import bgImg from './../../../assets/imageAkshar.png'

const HeroSection = () => {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat flex justify-between items-center min-h-[50vh] h-screen text-white" style={{backgroundImage:`url(${bgImg})`}}>
       <div className="absolute inset-0 z-10 bg-black/40"></div>
       <div className='z-20 flex justify-between items-center w-full'>
        <div className='flex justify-center items-center'>
            <div className='w-60 h-50 flex justify-center items-center'>
                <img src={Akshar} alt="" />
            </div>
            <div>
                <h1 className='stick-no-bills-2 text-5xl text-white tracking-wider'>AKSHAR</h1>
                <p className='stick-no-bills tracking-wider'>Nurturing Young Minds With Basic Education. Values. And Civic Sense To Build Strong Foundations.</p>
            </div>
        </div>
        <div className='mr-10 mt-10 flex flex-col gap-5'>
            <div className='h-50 w-50 text-2xl flex justify-center items-center rounded-2xl bg-[#c3c3c3] border-8 border-white/35 text-black purple-purse-regular cursor-pointer'>
                EVENT-1
            </div>
            <div className='h-50 w-50 text-2xl flex justify-center items-center rounded-2xl bg-[#c3c3c3] border-8 border-white/35 text-black purple-purse-regular cursor-pointer'>
                EVENT-2
            </div>
            <div className='h-50 w-50 text-2xl flex justify-center items-center rounded-2xl bg-[#c3c3c3] border-8 border-white/35 text-black purple-purse-regular cursor-pointer'>
                EVENT-3
            </div>
        </div>
       </div>

    </section>
  )
}

export default HeroSection