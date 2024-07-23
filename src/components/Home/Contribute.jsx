import React from 'react'
import img from "../assets/2148860433.jpg"
import { Link } from 'react-router-dom'

const Contribute = () => {
  return (
    <div className='w-[90%] mx-auto py-20'>
      <div className='relative w-full'>
        <img src={img} alt="" className='h-[350px] rounded-3xl w-full object-cover' />
        <div className='w-full h-full bg-[#00000099] flex justify-center items-center flex-col  rounded-3xl absolute top-0 p-10'>
          <h2 className='text-5xl sm:text-2xl text-white text-center w-[70%] mx-auto font-bold'>You can contribute to creating a Sustainable Future for All </h2>
          <div className='flex gap-5 w-full justify-center'>
          <Link to="/contact">
            <button className='w-[146px] h-[51px] bg-[#990000] mt-10 text-white rounded-md'>
              Contact Us
            </button></Link>
            <button className='w-[146px] h-[51px] bg-[#fff] mt-10 text-black rounded-md'>
              Donate
            </button>
          </div>
        </div>
      </div>
      <section className='mt-20'>
        <div className='flex'>
          <h2 className='text-[#1D2130] font-medium text-4xl'>Our Events</h2>
          <div className='flex-1 my-auto h-[2px]  ml-5 bg-[#E5E5E5]'></div>
        </div>
        <section className='mt-10 flex  sm:flex-col gap-10'>
          <div className='p-8 flex w-full gap-3 rounded-[20px]' style={{ border: "1px solid #0C7B3B" }}>
            <div>
              <h2 className='text-4xl'>30</h2>
              <h2>July</h2>
            </div>
            <div>
              <div className='flex'>
                <h2 className='text-[#1D2130] font-medium text-base'>Our Events</h2>
                <div className='w-[100px] my-auto h-[2px]  ml-5 bg-[#E5E5E5]'></div>
              </div>
              <div className='flex gap-14 mt-2'>
              <h2 className='font-medium sm:text-base text-xl'>A day with our wonderful <br /> children </h2>

              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="28" cy="28" r="28" fill="#990000" />
                <path d="M37.4571 28.7071C37.8476 28.3166 37.8476 27.6834 37.4571 27.2929L31.0931 20.9289C30.7026 20.5384 30.0695 20.5384 29.6789 20.9289C29.2884 21.3195 29.2884 21.9526 29.6789 22.3431L35.3358 28L29.6789 33.6569C29.2884 34.0474 29.2884 34.6805 29.6789 35.0711C30.0695 35.4616 30.7026 35.4616 31.0931 35.0711L37.4571 28.7071ZM19.25 29L36.75 29L36.75 27L19.25 27L19.25 29Z" fill="white" />
              </svg>


            </div>
            </div>
            
          </div>
          <div className='p-8 flex w-full gap-3 rounded-[20px]' style={{ border: "1px solid #0C7B3B" }}>
            <div>
              <h2 className='text-4xl'>30</h2>
              <h2>July</h2>
            </div>
            <div>
              <div className='flex'>
                <h2 className='text-[#1D2130] font-medium text-base'>Our Events</h2>
                <div className='w-[100px] my-auto h-[2px]  ml-5 bg-[#E5E5E5]'></div>
              </div>
              <div className='flex gap-14 mt-2'>
              <h2 className='font-medium sm:text-base text-xl'>A day with our wonderful <br /> children </h2>

              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="28" cy="28" r="28" fill="#990000" />
                <path d="M37.4571 28.7071C37.8476 28.3166 37.8476 27.6834 37.4571 27.2929L31.0931 20.9289C30.7026 20.5384 30.0695 20.5384 29.6789 20.9289C29.2884 21.3195 29.2884 21.9526 29.6789 22.3431L35.3358 28L29.6789 33.6569C29.2884 34.0474 29.2884 34.6805 29.6789 35.0711C30.0695 35.4616 30.7026 35.4616 31.0931 35.0711L37.4571 28.7071ZM19.25 29L36.75 29L36.75 27L19.25 27L19.25 29Z" fill="white" />
              </svg>


            </div>
            </div>
            
          </div>
        </section>
      </section>
    </div>
  )
}

export default Contribute
