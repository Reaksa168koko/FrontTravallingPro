import React from 'react'
import { agency } from '../../data'

const CardComponents = () => {
  return (
    <div>
      <div className='w-full h-[250px]  mt-100'>
        <h1 className='text-center text-4xl font-semibold text-amber-900 '>Our agency advantages </h1>
        <div className='w-full mt-7 flex gap-5 justify-center h-full '>
        {agency.map((o)=>(
            <div className='w-[250px] h-full '>
                <div className='w-full h-[65%] '>
                    <img src={o.img} className='w-full h-full object-cover' alt="" />
                </div>
                <div className='w-full h-[35%]'>
                    <h1 className='text-black text-center'>{o.discription}</h1>
                </div>
            </div>
        ))}
        </div>
      </div>
      {/* card */}
      <div className='w-full h-[300px]  mt-20 bg-amber-400'>
        <div className='flex justify-center gap-5 w-full h-full'>
            {/*  */}
            <div className='w-[580px] bg-amber-900 h-full'>
                <div className='w-full h-full bg-amber-100'>

                </div>
                <div className='w-full h-full bg-amber-100'>

                </div>
                <div className='w-full h-full bg-amber-100'>

                </div>
            </div>
            {/*  */}
            <div className='w-[580px] bg-amber-900 h-full'>
                 <div className='w-full h-full bg-amber-800'>

                </div>
                 <div className='w-full h-full bg-amber-800'>

                </div>
                 <div className='w-full h-full bg-amber-800'>

                </div>
               
            </div>
          
        </div>
      </div>
    </div>
  )
}

export default CardComponents
