import React from 'react'
import Nav from '../Global/Nav'
import Footer from '../Global/Footer'
import MobileFooter from '../Global/MobileFooter'
import ProjectCard from '../Global/ProjectCard'
import Contribute from '../Home/Contribute'

const Media = () => {
  return (
    <>
    <Nav />
    <section className='w-[90%] mx-auto'>
    <div className='flex mt-10 '>
                    <div className='w-[75px] my-auto h-[2px]  mr-5 bg-[#0C7B3B]'></div>
                    <h2 className='text-[#0C7B3B] text-base font-bold'>ALL PROJECTS</h2>
                </div>
    </section>
    <ProjectCard />
    <Contribute />
    <Footer />
    <MobileFooter />
    </>
  )
}

export default Media