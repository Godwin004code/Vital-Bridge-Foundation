import React from 'react'
import img from "../assets/2150577025.jpg"

const About = () => {
    return (
        <section className='flex sm:flex-col w-[90%] mx-auto py-20 justify-between'>
            <div className='flex w-[45%] sm:w-[100%] sm:mx-auto'>
               
                <section>
                  <div className='flex'>
                  <div className='w-[75px] my-auto h-[2px] mt-2 mr-5 bg-[#0C7B3B]'></div>
                  <h2 className='text-[#0C7B3B] text-base font-bold'>
                  KNOW ABOUT US</h2>
                  </div>
                    <h2 className='text-[#1D2130] sm:hidden text-3xl sm:text-2xl font-bold mt-10'>A beacon of hope, dedicated to</h2>
                    <h2 className='text-[#1D2130] sm:hidden text-3xl  sm:text-2xl font-bold'>
                        improving the lives of the less privileged

                    </h2>
                    <h2 className='text-[#1D2130] hidden sm:block text-3xl sm:text-2xl font-bold mt-10'>
                    A beacon of hope, dedicated to improving the lives of the less privileged
                    </h2>
                    <p className='text-[#525560] text-base  mt-10 font-normal'>
                    We take a multifaceted approach to addressing key challenges, prioritizing education as a catalyst for transformation. Through scholarships, educational programs, and support for schools and students, we aim to make quality education accessible to all.
                    </p>
                    <p className='text-[#525560] text-base  mt-10 font-normal'>
                    We also focus on skills development by providing training, mentorship, and support to empower individuals in their personal and professional endeavors.

                    </p>
                    <button className='w-[145px] h-[51px] bg-[#F59F24] mt-10 text-white rounded-sm'>
                        What we do
                    </button>
                </section>
            </div>
            <div className='w-[45%] sm:w-[100%] sm:mt-10 h-[578px] sm:h-[350px]'>
                <img src={img} className='h-full w-full object-cover rounded-[20px]' alt="know about us" />
            </div>
        </section>
    )
}

export default About