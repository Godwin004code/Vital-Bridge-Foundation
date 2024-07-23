import React from 'react'
import img1 from "../assets/33809396_1906232029667209_6833449412119756800_n.jpg"
import img2 from "../assets/30890658_198614010631638_1579186078043078656_n.jpg"
import img3 from "../assets/34808471_240121406748971_2142859561655074816_n.jpg"
import { Link } from 'react-router-dom'

const ProjectCard = () => {
  return (
    <section className='flex w-[80%] sm:w-[90%] mx-auto  sm:flex-col gap-10 mt-12'>
        <div className='relative w-full'>
          <img src={img1} alt="" className='h-[350px] rounded-3xl w-full object-cover' />
          <div className='w-full h-full bg-[#00000099] rounded-3xl absolute top-0 p-10 '>
            <h2 className='text-2xl sm:text-base text-white font-bold'>Project CleanupDelta </h2>
            <p className='text-base sm:text-sm  mt-7 text-white font-normal leading-[30px]'>
              We initiated Project Cleanup Delta, a community-driven effort dedicated to cleaning up waste and promoting environmental stewardship throughout Delta State.
            </p>
            <Link to="/project-cleanup-delta">
            <button className='w-[146px] h-[51px] bg-[#990000] mt-6 text-white rounded-sm'>
              Learn more
            </button>
            </Link>
          </div>
        </div>
        <div className='relative w-full'>
          <img src={img2} alt="" className='h-[350px] rounded-3xl w-full object-cover' />
          <div className='w-full h-full bg-[#00000099] rounded-3xl absolute top-0 p-10'>
            <h2 className='text-2xl sm:text-base text-white font-bold'>Project End Malaria             </h2>
            <p className='text-base  sm:text-sm  mt-7 text-white font-normal leading-[30px]'>
              We initiated Project Cleanup Delta, a community-driven effort dedicated to cleaning up waste and promoting environmental stewardship throughout Delta State.
            </p>
            <Link to="/project-end-malaria">
            <button className='w-[146px] h-[51px] bg-[#990000] mt-6 text-white rounded-sm'>
              Learn more
            </button></Link>
          </div>
        </div>
        <div className='relative w-full'>
          <img src={img3} alt="" className='h-[350px] rounded-3xl w-full object-cover' />
          <div className='w-full h-full bg-[#00000099] rounded-3xl absolute top-0 p-10'>
            <h2 className='text-2xl sm:text-base text-white font-bold'>Project KeepSapeleClean </h2>
            <p className='text-base  sm:text-sm mt-7 text-white font-normal leading-[30px]'>
              We initiated Project Cleanup Delta, a community-driven effort dedicated to cleaning up waste and promoting environmental stewardship throughout Delta State.
            </p>
            <Link to="/project-keepsapeleclean">
            <button className='w-[146px] h-[51px] bg-[#990000] mt-6 text-white rounded-sm'>
              Learn more
            </button></Link>
          </div>
        </div>

      </section>
  )
}

export default ProjectCard