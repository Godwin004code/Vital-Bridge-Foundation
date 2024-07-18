import React from 'react'
import img1 from "../assets/33809396_1906232029667209_6833449412119756800_n.jpg"
import img2 from "../assets/30890658_198614010631638_1579186078043078656_n.jpg"
import img3 from "../assets/34808471_240121406748971_2142859561655074816_n.jpg"

const Projects = () => {
  return (
    <div className='w-[90%] mx-auto py-20'>
      <div className='flex'>
        <div className='w-[75px] my-auto h-[2px]  mr-5 bg-[#0C7B3B]'></div>
        <h2 className='text-[#0C7B3B] text-base font-bold'>Projects we have done</h2>
      </div>
      <p className='text-4xl sm:text-2xl text-[#1D2130] w-[40%] sm:w-[100%] ml-[170px] sm:ml-0 mt-10 font-semibold'>
        Vital Bridge believes in creating a sustainable future where quality education, essential healthcare, and environmental stewardship are accessible to all.
      </p>
      <section className='flex  sm:flex-col gap-10 mt-12'>
        <div className='relative w-full'>
          <img src={img1} alt="" className='h-[350px] rounded-3xl w-full object-cover' />
          <div className='w-full h-full bg-[#00000099] rounded-3xl absolute top-0 p-10'>
            <h2 className='text-2xl sm:text-base text-white font-bold'>Project CleanupDelta </h2>
            <p className='text-base sm:text-sm  mt-7 text-white font-normal leading-[30px]'>
              We initiated Project Cleanup Delta, a community-driven effort dedicated to cleaning up waste and promoting environmental stewardship throughout Delta State.
            </p>
            <button className='w-[146px] h-[51px] bg-[#F59F24] mt-10 text-white rounded-sm'>
              What we do
            </button>
          </div>
        </div>
        <div className='relative w-full'>
          <img src={img2} alt="" className='h-[350px] rounded-3xl w-full object-cover' />
          <div className='w-full h-full bg-[#00000099] rounded-3xl absolute top-0 p-10'>
            <h2 className='text-2xl sm:text-base text-white font-bold'>Project CleanupDelta </h2>
            <p className='text-base  sm:text-sm  mt-7 text-white font-normal leading-[30px]'>
              We initiated Project Cleanup Delta, a community-driven effort dedicated to cleaning up waste and promoting environmental stewardship throughout Delta State.
            </p>
            <button className='w-[146px] h-[51px] bg-[#F59F24] mt-10 text-white rounded-sm'>
              What we do
            </button>
          </div>
        </div>
        <div className='relative w-full'>
          <img src={img3} alt="" className='h-[350px] rounded-3xl w-full object-cover' />
          <div className='w-full h-full bg-[#00000099] rounded-3xl absolute top-0 p-10'>
            <h2 className='text-2xl sm:text-base text-white font-bold'>Project CleanupDelta </h2>
            <p className='text-base  sm:text-sm mt-7 text-white font-normal leading-[30px]'>
              We initiated Project Cleanup Delta, a community-driven effort dedicated to cleaning up waste and promoting environmental stewardship throughout Delta State.
            </p>
            <button className='w-[146px] h-[51px] bg-[#F59F24] mt-10 text-white rounded-sm'>
              What we do
            </button>
          </div>
        </div>

      </section>
    </div>
  )
}

export default Projects