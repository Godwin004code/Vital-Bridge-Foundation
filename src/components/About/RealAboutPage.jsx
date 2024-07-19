import React from 'react'
import Nav from '../Global/Nav'
import Footer from '../Global/Footer'
import MobileFooter from '../Global/MobileFooter'
import img from "../assets/2148860433.jpg"
import Contribute from '../Home/Contribute'

const RealAboutPage = () => {
    return (
        <>
            <Nav />
            <div className='flex mt-10 w-[90%] mx-auto'>
                <div className='w-[75px] my-auto h-[2px]  mr-5 bg-[#0C7B3B]'></div>
                <h2 className='text-[#0C7B3B] text-base font-bold'>ABOUT US</h2>
            </div>
            <section className='flex w-[90%] mx-auto  sm:flex-col justify-between mt-0'>
                <div className='sm:ml-0 sm:w-[100%] w-[50%]'>

                    <div className='ml-[77px] sm:ml-0 mt-5'>
                        <h2 className='text-5xl text-[#1D2130] font-bold'>A beacon of hope, dedicated to improving the lives of the less privileged
                        </h2>

                    </div>

                </div>
                <div className='w-[50%] sm:w-[100%] sm:mt-10'>
                    <p className='text-[#525560] mt-0 text-base font-normal'>
                        Since its establishment on May 8, 2017, the Green Gold Initiative, now "Vital Bridge," has been dedicated to improving the lives of the less privileged. Committed to social welfare and equal access to opportunities, we prioritize education as a catalyst for transformation through scholarships, programs, and support for schools and students.
                    </p>
                    <p className='text-[#525560] mt-3 text-base font-normal'>
                        Our focus on skills development includes training, mentorship, and professional support to empower individuals. Additionally, we advocate for basic healthcare access, improved health outcomes, and preventive measures.
                    </p>
                    <p className='text-[#525560] mt-3 text-base font-normal'>
                        Our environmental sustainability efforts aim to reduce plastic waste, celebrate global climate days, and promote greener practices. Vital Bridge embodies compassion, empowerment, and resilience, inviting all to join us in creating positive change and building a brighter future for everyone.
                    </p>
                </div>
            </section>
            <img src={img} className='h-[400px] mb-[-200px] mt-20 rounded-[20px]  z-50   w-[90%] mx-auto object-cover' alt="about us" />
            <section className='bg-[#FCEDC6] z-30 pt-[300px] pb-20  w-full '>
              
                    
             
                <div className='w-[60%] mx-auto flex sm:flex-col sm:w-[90%] gap-10'>
                    <div className='w-full'>
                        <h2 className='text-[#1D2130] font-bold text-base'>OUR MISSION</h2>
                        <p className='text-[#1D2130] text-base mt-5 font-normal'>THE VITAL BRIDGE is a beacon of hope, a non-profit organization committed to enhancing the welfare of the less privileged by providing sustainable quality education, fostering skills development, ensuring access to basic healthcare, and advocating for environmental sustainability.</p>
                    </div>
                    <div className='w-full'>
                        <h2 className='text-[#1D2130] font-bold text-base'>OUR MISSION</h2>
                        <p className='text-[#1D2130] text-base mt-5 font-normal'>THE VITAL BRIDGE is a beacon of hope, a non-profit organization committed to enhancing the welfare of the less privileged by providing sustainable quality education, fostering skills development, ensuring access to basic healthcare, and advocating for environmental sustainability.</p>
                    </div>
                </div>
            </section>
            <Contribute />
            <Footer />
            <MobileFooter />
        </>
    )
}

export default RealAboutPage