import React from 'react'
import Nav from '../Global/Nav'
import Footer from '../Global/Footer'
import MobileFooter from '../Global/MobileFooter'
import img1 from "../assets/33809396_1906232029667209_6833449412119756800_n.jpg"
import Contribute from '../Home/Contribute'
import ProjectCard from '../Global/ProjectCard'


const ProjectTwo = () => {
  return (
    <div>

            <Nav />
            <section className=' w-[80%] sm:w-[90%]  mx-auto'>
                <div className='flex mt-10 '>
                    <div className='w-[75px] my-auto h-[2px]  mr-5 bg-[#0C7B3B]'></div>
                    <h2 className='text-[#0C7B3B] text-base font-bold'>OUR PROJECT</h2>
                </div>
               <section className='ml-[75px] sm:ml-0'>
               <h2 className='text-5xl font-bold sm:text-3xl mt-10 text-[#1D2130]'>Project End Malaria</h2>
                <p className='text-base text-[#525560] font-normal mt-10'>
                    Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in in lorem platea mattis. Euismod aenean rhoncus scelerisque amet tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien, accumsan et id ut est. Posuere molestie in turpis quam. Scelerisque in viverra mi ut quisque. In sollicitudin sapien, vel nulla quisque vitae. Scelerisque eget accumsan, non in. Posuere magna erat bibendum amet, nisi eu id.
                </p>
                <p className='text-base text-[#525560] font-normal mt-10'>
                    Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in in lorem platea mattis. Euismod aenean rhoncus scelerisque amet tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien, accumsan et id ut est. Posuere molestie in turpis quam. Scelerisque in viverra mi ut quisque. In sollicitudin sapien, vel nulla quisque vitae. Scelerisque eget accumsan, non in. Posuere magna erat bibendum amet, nisi eu id.
                </p>
                <img src={img1} alt='Project cleanup delta' className='h-[650px] sm:h-[300px] w-full mt-10 object-cover rounded-[20px]' />
                <p className='text-base text-[#525560] font-normal mt-10'>
                    Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in in lorem platea mattis. Euismod aenean rhoncus scelerisque amet tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien, accumsan et id ut est. Posuere molestie in turpis quam. Scelerisque in viverra mi ut quisque. In sollicitudin sapien, vel nulla quisque vitae. Scelerisque eget accumsan, non in. Posuere magna erat bibendum amet, nisi eu id.
                </p>
                <p className='text-base text-[#525560] font-normal mt-10'>
                    Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in in lorem platea mattis. Euismod aenean rhoncus scelerisque amet tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien, accumsan et id ut est. Posuere molestie in turpis quam. Scelerisque in viverra mi ut quisque. In sollicitudin sapien, vel nulla quisque vitae. Scelerisque eget accumsan, non in. Posuere magna erat bibendum amet, nisi eu id.
                </p>
               </section>
            </section>
            <div className='flex w-[80%] mx-auto mt-36 '>
                    <div className='w-[75px] my-auto h-[2px]  mr-5 bg-[#0C7B3B]'></div>
                    <h2 className='text-[#0C7B3B] text-base font-bold'>SEE MORE</h2>
                </div>
            <ProjectCard />
<Contribute />
            <Footer />
            <MobileFooter />
        </div>
  )
}

export default ProjectTwo