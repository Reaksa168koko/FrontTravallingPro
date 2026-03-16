import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";

const Guide = () => {
  return (
    <div>
             <div className='mt-4 bg-amber-300 '>
                            <ul className='flex gap-4 '>
                                <li><Link to={"/tripe"} href="" className='font-bold text-white text-md'>Trips</Link></li>
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
      Guide
    </div>
  )
}

export default Guide
