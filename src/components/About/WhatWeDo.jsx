import React from 'react'
import img from "../assets/africa-humanitarian-aid-doctor-taking-care-patient_23-2149117884.jpg"

const WhatWeDo = () => {
  return (
    <div className='w-full py-20 sm:pt-0'>
    <section className='w-[90%] mx-auto'>
  
    <section className='flex  sm:flex-col justify-between mt-10'>
<div className='sm:ml-0 sm:w-[100%] w-[50%]'>
<div className='flex '>
    <div className='w-[75px] my-auto h-[2px]  mr-5 bg-[#0C7B3B]'></div>
    <h2 className='text-[#0C7B3B] text-base font-bold'>WHAT WE DO</h2>
    </div>
  <div className='ml-[77px] sm:ml-0 mt-10'>
  <h2 className='text-5xl text-[#1D2130] font-bold'>We are working cross country </h2>
    <p className='text-[#525560] mt-10 text-base font-normal'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
    </p>
    <p className='text-[#525560] mt-10 text-base font-normal'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor i
    </p>
  </div>
   
</div>
<div className='w-[40%] sm:w-[100%] sm:mt-10'>
    <img src={img} className='h-[370px] sm:h-[350px] rounded-[20px] w-full object-cover' alt="" />
</div>
    </section>
    </section>
</div>
  )
}

export default WhatWeDo