import React, { useEffect, useRef } from 'react'
import logo from '../../src/assets/Image/Logo.png'
import { FaSearch } from "react-icons/fa";
import angkor from '../assets/Image/angkorwant.png'
import Typed from 'typed.js';
import { dataimg } from '../../data';

const Banner = () => {
    const el = useRef(null);
    useEffect(() => {
        const type = new Typed(el.current, {
            strings: ["Welcome To Cambodia", "Thanks For Visite Here"],
            typeSpeed: 40,
            backSpeed: 0,
            loop: true
        })
        return () => {
            type.destroy();
        }
    }, [])
    return (
        <div className='w-full h-full'>
            <div className='relative w-full h-[600px] bg-amber-500 p-3' style={{ backgroundImage: `url(${angkor})` }}>
                <div className='flex justify-between'>
                    <div className='flex gap-10'>
                        <div>
                            <img src={logo} alt="" />
                        </div>
                        {/* navbar */}
                        <div className='mt-4'>
                            <ul className='flex gap-4 '>
                                <li><a href="" className='font-bold text-white text-md'>Trips</a></li>
                                <li><a href="" className='font-bold text-white text-md'>Guide</a></li>
                                <li><a href="" className='font-bold text-white text-md'>Travel Tip</a></li>
                                <li><a href="" className='font-bold text-white text-md'>Travel Angency</a></li>
                                <li><a href="" className='font-bold text-white text-md'>Blog</a></li>
                                <li><a href="" className='font-bold text-white text-md'>Contact</a></li>
                                <div>
                                    <FaSearch color='white' />
                                </div>
                            </ul>
                        </div>
                    </div>
                    {/*  */}
                    <div className='text-white flex gap-6'>
                        <p className='text-white mt-4'>Call us at <span className='text-xl'> +855 975422797</span></p>
                        <p className='mt-4'>Language</p>
                        <button className='mt-2'>Login</button>
                        <button className=' px-5 bg-amber-400 rounded-md font-bold text-white '>Sign up</button>
                    </div>
                </div>
                <div className='w-full h-full flex justify-center  items-center'>
                    <div className='flex-col mb-20'>
                        <h1 className='text-7xl text-white'><span ref={el}></span></h1>
                        <h1 className='text-white text-3xl text-center'>When Are You Comming?</h1>
                    </div>
                </div>
            </div>
            <div className='absolute flex -mt-12  '>
                <div className='w-250 h-[90px] p-4 ml-110 bg-white shadow-md  rounded-2xl '>
                    <div className='w-full h-full flex'>
                        <div className='w-[40%] h-full bg-amber-50 p-1'>
                            <select name="" id="" className='w-full  h-full outline-0 rounded-md border-gray-300 border'>
                                <option value="">All Duration</option>
                            </select>
                        </div>
                        <div className='w-[40%] h-full bg-amber-50 p-1'>
                            <select name="" id="" className='w-full  h-full outline-0 rounded-md border-gray-300 border'>
                                <option value="">Popular Themes</option>
                            </select>
                        </div>
                        <div className='w-[20%] p-1' >
                            <button className='w-full h-full rounded-md bg-amber-400 text-white text-2xl font-bold'>Find</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' w-full h-[280px] flex justify-center items-center bg-stone-700'>
                <div className='w-[50%] flex h-[200px] '>
                    <div className='w-1/2 h-full flex items-center '>
                        <div>
                            <h1 className='text-green-400 text-2xl '>Popular Themes</h1>
                            <h1 className='text-3xl font-bold text-white '>Among The Travaler</h1>
                        </div>
                    </div>
                    <div className='w-1/2 h-full flex items-center '>
                        <div>
                            <h1 className='text-white'>Better to see something once than hear about it a thousand times</h1>
                        </div>
                    </div>

                </div>
            </div>
            <div className='absolute top-210 w-full flex justify-center gap-6 h-[350px] '>
                    {dataimg.map((p)=>(
                <div className='w-[270px] h-full rounded-2xl bg-amber-700'>
                        <img src={p.img} className='w-full h-full object-cover rounded-2xl' alt="" />
                </div>
                    ))}
            </div>
        </div>
    )
}

export default Banner
