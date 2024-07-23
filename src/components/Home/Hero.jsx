
import React from 'react'
import hero from "../assets/2148860433.jpg"
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className='h-[90vh] sm:h-[70vh]  w-full relative'>

        <img src={hero} alt="hero" className='object-cover h-full w-full' />
        <section className='w-full h-full bg-[#00000099] absolute top-0'>
           <section className='w-[90%] mx-auto mt-20'>
           <h2 className='text-white text-6xl sm:text-3xl font-bold'>Enhancing lives and </h2>
            <h2 className='text-white text-6xl  sm:text-3xl font-bold'>supporting communities</h2>
            <h2 className='text-white text-6xl  sm:text-3xl font-bold'>in need.</h2>
            <Link to="/what-we-do">
            <button className='w-[148px] h-[51px] bg-[#720000] mt-10 text-white rounded-sm'>
           What we do
        </button>
            </Link>
        <section className='flex justify-between sm:hidden mt-[25%] sm:mt-[150]'>
            <h2 className='text-white text-lg sm:text-sm font-medium'>230 children under our care</h2>
            <div className='flex-1 h-[2px] bg-white mx-5 sm:mx-0 my-auto'></div>
            <h2 className='text-white text-lg sm:text-sm font-medium'>58 donations collected</h2>
        </section>
           </section>
        </section>
    </section>
  )
}

export default Hero