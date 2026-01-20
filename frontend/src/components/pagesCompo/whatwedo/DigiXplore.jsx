import React from 'react'

const DigiXplore = () => {
  return (
    <section className='bg-white text-black w-screen flex justify-center items-center py-30 px-10'>
        <div className='w-3/4 flex justify-between items-center'>
            <div className='flex flex-col gap-3'>
                <div className='w-15 h-1 bg-gray-400 mb-4'></div>
                <div className='text-5xl'>
                    <h1 className='text-black oswald-font-3'>IMPACT OF</h1>
                    <h1 className='text-blue-400 oswald-font-3'>DIGIXPLORE</h1>
                </div>
                <div className='mt-4 flex justify-between'>
                    <div className='flex flex-col w-1/2 gap-3'>
                        <div className='text-blue-400 text-5xl inter-font-3'>200+</div>
                        <div className='inter-font-3 text-wrap'>CHILDREN RECEIVED QUALITY EDUCATION</div>
                    </div>
                    <div className='flex flex-col gap-3 '>
                        <div className='text-blue-400 text-5xl inter-font-3'>12+</div>
                        <div className='inter-font-3 text-wrap'>SCHOOLS OPENED</div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-3 rotate-45 h-1/2 w-1/4 aspect-square'>
                <div className=' shadow-lg'>
                    <img src="" alt="" className='rotate-45'/>
                </div>
                <div className='shadow-lg'>
                    <img src="" alt="" className='rotate-45'/>
                </div>
                <div className=' shadow-lg'>
                    <img src="" alt="" className='rotate-45'/>
                </div>
                <div className=' shadow-lg'>
                    <img src="" alt="" className='rotate-45'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default DigiXplore