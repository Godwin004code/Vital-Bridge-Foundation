import React from 'react'
import img from "../assets/africa-humanitarian-aid-doctor-taking-care-patient_23-2149117884.jpg"

const WhatWeDo = () => {
  return (
    <div className='w-full hidden py-20 sm:pt-0'>
    <section className='w-[90%] mx-auto'>
  
    <section className='flex  sm:flex-col justify-between mt-10'>
<div className='sm:ml-0 sm:w-[100%] w-[50%]'>
<div className='flex '>
    <div className='w-[75px] my-auto h-[2px]  mr-5 bg-[#0C7B3B]'></div>
    <h2 className='text-[#0C7B3B] text-base font-bold'>WHAT WE DO</h2>
    </div>
  <div className='ml-[77px] sm:ml-0 mt-10'>
  <h2 className='text-5xl text-[#1D2130] font-bold'>A beacon of hope, dedicated to improving the lives of the less privileged
</h2>
    <p className='text-[#525560] mt-10 text-base font-normal'>
    Since its establishment on May 8, 2017, the Green Gold Initiative, now "Vital Bridge," has been dedicated to improving the lives of the less privileged. Committed to social welfare and equal access to opportunities, we prioritize education as a catalyst for transformation through scholarships, programs, and support for schools and students.
    </p>
    <p className='text-[#525560] mt-10 text-base font-normal'>
    Our focus on skills development includes training, mentorship, and professional support to empower individuals. Additionally, we advocate for basic healthcare access, improved health outcomes, and preventive measures.
    </p>
    <p className='text-[#525560] mt-10 text-base font-normal'>
    Our environmental sustainability efforts aim to reduce plastic waste, celebrate global climate days, and promote greener practices. Vital Bridge embodies compassion, empowerment, and resilience, inviting all to join us in creating positive change and building a brighter future for everyone.
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