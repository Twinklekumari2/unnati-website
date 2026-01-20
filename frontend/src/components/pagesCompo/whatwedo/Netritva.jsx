import React from 'react'

const Netritva = () => {
  return (
    <section className='bg-white text-black w-screen flex justify-center items-center py-30 px-10'>
        <div className='w-3/4 flex justify-between items-center'>
            <div className="flex gap-3 items-center justify-center">
            <div className="flex flex-col">
                <div className="h-1/2 w-full p-10"></div>
                <div className="border rounded-full p-5 border-blue-400 aspect-square flex justify-center items-center oswald-font-3">
                    <img src="" alt="" />
                </div>
            </div>
            <div className="h-full border border-blue-400 rounded-full p-25 bg-white text-black aspect-square flex justify-center items-center oswald-font-3 text-2xl">
                <img src="" alt="" />
            </div>
            <div>
                <div className="border rounded-full p-10 border-blue-400 aspect-square flex justify-center items-center oswald-font-3">
                    <img src="" alt="" />
                </div>
                <div className="h-1/2 p-10"></div>
            </div>
        </div>
            <div className='flex flex-col gap-3'>
                <div className='w-15 h-1 bg-gray-400 mb-4'></div>
                <div className='text-5xl'>
                    <h1 className='text-black oswald-font-3'>IMPACT OF</h1>
                    <h1 className='text-blue-400 oswald-font-3'>NETRITVA</h1>
                </div>
                <div className='mt-4 flex justify-between'>
                    <div className='flex flex-col w-1/2 gap-3'>
                        <div className='text-blue-400 text-5xl inter-font-3'>200+</div>
                        <div className='inter-font-3 text-wrap'>CHILDREN RECEIVED GUIDANCE</div>
                    </div>
                    <div className='flex flex-col gap-3 '>
                        <div className='text-blue-400 text-5xl inter-font-3'>12+</div>
                        <div className='inter-font-3 text-wrap'>SCHOOLS REACHED</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Netritva