
import React from 'react'
import hero from "../assets/2148860433.jpg"
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className='h-[90vh] sm:h-[70vh]  w-full relative'>

        <img src={hero} alt="hero" className='object-cover h-full w-full' />
        <section className='w-full h-full bg-[#00000099] absolute top-0'>
           <section className='w-[90%] mx-auto mt-20'>
           <h2 className='text-white text-6xl md-2:text-3xl font-bold'>INVESTING IN PEOPLE;  
</h2>
            <h2 className='text-white text-6xl  md-2:text-3xl font-bold'>TRANSFORMING LIVES;</h2>
            <h2 className='text-white text-6xl  md-2:text-3xl font-bold'>INSPIRING GODLY & PURPOSEFUL PROGRESS</h2>
            <Link to="/what-we-do">
            <button className='w-[148px] h-[51px] bg-[#720000] mt-10 text-white rounded-sm'>
           What we do
        </button>
            </Link>
        
           </section>
        </section>
    </section>
  )
}

export default Hero