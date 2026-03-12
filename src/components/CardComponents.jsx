import React from 'react'
import { agency, lefttours, rigthtour } from '../../data'
import { CiHeart } from "react-icons/ci";

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
      {/* cardleft */}
      <div className='w-full h-[350px]  mt-20 '>
        <div className='flex justify-center gap-5 w-full h-full'>
            {/*  */}
            <div className='w-[600px]  h-full'>
                <div className='w-full p-20   h-full '>
                  <h1 className='text-center text-3xl text-green-500'>Unexpected</h1>
                  <h1 className='text-5xl text-center text-amber-900 '>Experiences</h1>
                  <p className='text-center mt-5 text-xl'>Because in the end, you won’t remember the 
                    time you spent working in the office or mowing your lawn. Climb that goddamn mountain.</p>
                </div>
                {/* card */}
              {lefttours.map((p)=>(
                  <div className='w-full mb-4 shadow-md h-full rounded-2xl '>
                    <div className='w-full h-[75%] rounded-t-2xl  '>
                        <img src={p.image} className='w-full rounded-t-2xl h-full object-center' alt="" />
                    </div>
                    <div className='absolute -mt-25 pl-9 '>
                      <h1 className='text-2xl text-amber-500'>{p.tag}</h1>
                      <h1 className='text-4xl font-bold text-white'>{p.title}</h1>
                    </div>
                    <div className='absolute flex -mt-5 right-250'>
                      <div className='w-10 h-10 flex justify-center items-center rounded-full bg-amber-50'>
                          <CiHeart size={20} />
                      </div>
                    </div>
                    <div className='w-full h-[25%]  p-4'>
                      <p><span className='text-xl'>Duration {p.duration} days</span> <span className='text-gray-600'>sit amet consectetur adipisicing elit. Vitae volup</span></p>
                      <p><span className='text-xl mr-2'>From</span><span className='text-2xl text-green-600 mr-3'>{p.pricePerPerson}{p.currency}</span>Per person</p>
                    </div>
                </div>
              ))}
          
           
            </div>
            {/*cardrigth  */}
            <div className='w-[600px]  mt-22 h-full'>
             {rigthtour.map((p)=>(
                 <div className='w-full mb-4 shadow-md rounded-2xl   h-full '>
                    <div className='w-full h-[75%] rounded-t-2xl '>
                        <img src={p.image} className='w-full rounded-t-2xl h-full object-center' alt="" />
                    </div>
                    <div className='absolute -mt-25 pl-9 '>
                      <h1 className='text-2xl text-amber-500'>{p.tag}</h1>
                      <h1 className='text-4xl font-bold text-white'>{p.title}</h1>
                    </div>
                    <div className='absolute flex -mt-5 right-95'>
                      <div className='w-10 h-10 flex justify-center items-center rounded-full bg-amber-50'>
                          <CiHeart size={20} />
                      </div>
                    </div>
                    <div className='w-full h-[25%]  p-4'>
                      <p><span className='text-xl'>Duration {p.duration} days</span> <span className='text-gray-600'>sit amet consectetur adipisicing elit. Vitae volup</span></p>
                      <p><span className='text-xl mr-2'>From</span><span className='text-2xl text-green-600 mr-3'>{p.pricePerPerson}{p.currency}</span>Per person</p>
                    </div>
                </div>
             ))}
               
            </div>
          
        </div>
      </div>
    </div>
  )
}

export default CardComponents
