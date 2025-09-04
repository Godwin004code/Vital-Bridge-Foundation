import React from 'react'
import img from "../assets/2148860433.jpg"
import { Link } from 'react-router-dom'

const Contribute = () => {
  return (
    <div className='w-[90%] mx-auto py-20'>
      <div className='relative w-full'>
        <img src={img} alt="" className='h-[350px] md:h-[600px] lg:h-[500px] md-2:h-[600px] rounded-3xl w-full object-cover' />
        <div className='w-full h-full bg-[#00000099] flex justify-center items-center flex-col  rounded-3xl absolute top-0 p-10 m'>
           <div className='flex gap-5 w-full justify-center md:flex-col'>
            <div className='w-full p-10 bg-[#720000] mt-0 text-white rounded-xl'>
                      <h2 className='text-5xl mb-7 sm:text-2xl text-white text-center w-[70%] mx-auto font-bold'>Vision </h2>
         We envision a future where every individual has unhindered access to the basic needs of life: education, health, sustainable environments, and empowered human potential.
            </div>
            <div className='w-full p-10 bg-[#fff] mt-0 text-black rounded-xl'>
              <h2 className='text-5xl sm:text-2xl mb-7 text-[#000] text-center w-[70%] mx-auto font-bold'>Mission</h2>
              Our mission is to empower communities and individuals by promoting education, making health care accessible, championing environmental sustainability, and fostering human capacity development, with the aim of building a healthier and more resilient world for our generation and generations to come.
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Contribute
