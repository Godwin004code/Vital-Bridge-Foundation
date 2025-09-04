import React from 'react'
import Nav from '../Global/Nav'
import Hero from './Hero'
import Footer from '../Global/Footer'
import About from './About'
import Projects from './Projects'
import Howwespend from './Howwespend'
import Contribute from './Contribute'
import What from './What'
import MobileFooter from '../Global/MobileFooter'
import AnnouncementToolbar from '../Global/AnnouncementToolbar'
import WhatWeDo from '../About/WhatWeDo'
import MissionVision from './MissionVision'
import BottomAnn from '../Global/BottomAnn'
import WelcomeMessage from './WelcomeMessage'

const events = [
  {
    day: '30',
    month: 'July',
    title: 'A day with our wonderful children',
  },
  {
    day: '30',
    month: 'July',
    title: 'A day with our wonderful children',
  },
  // Add more events as needed
];

const Home = () => {
  return (
    
    <>
    <AnnouncementToolbar />
    <div className='mt-[50px]' />
    <Nav />
    <Hero />
    <About />
    
<What />
{/* mission vission */}
<Contribute /> 

<WelcomeMessage />
<Howwespend />

  
    
    <section className='w-[90%] mx-auto py-20'>
        <div className='flex'>
          <h2 className='text-[#1D2130] font-medium text-4xl'>Our Events</h2>
          <div className='flex-1 my-auto h-[2px]  ml-5 bg-[#E5E5E5]'></div>
        </div>
         <section className='mt-10 flex gap-10 overflow-x-auto flex-nowrap scrollbar-hide sm:flex-col'>
          {events.map((event, idx) => (
            <div
              key={idx}
              className='p-8 flex w-[400px] min-w-[340px] gap-3 rounded-[20px] shrink-0'
              style={{ border: "1px solid #0C7B3B" }}
            >
              <div>
                <h2 className='text-4xl'>{event.day}</h2>
                <h2>{event.month}</h2>
              </div>
              <div>
                <div className='flex'>
                  <h2 className='text-[#1D2130] font-medium text-base'>Our Events</h2>
                  <div className='w-[100px] my-auto h-[2px]  ml-5 bg-[#E5E5E5]'></div>
                </div>
                <div className='flex gap-14 mt-2'>
                  <h2 className='font-medium sm:text-base text-xl'>{event.title}</h2>
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="28" cy="28" r="28" fill="#990000" />
                    <path d="M37.4571 28.7071C37.8476 28.3166 37.8476 27.6834 37.4571 27.2929L31.0931 20.9289C30.7026 20.5384 30.0695 20.5384 29.6789 20.9289C29.2884 21.3195 29.2884 21.9526 29.6789 22.3431L35.3358 28L29.6789 33.6569C29.2884 34.0474 29.2884 34.6805 29.6789 35.0711C30.0695 35.4616 30.7026 35.4616 31.0931 35.0711L37.4571 28.7071ZM19.25 29L36.75 29L36.75 27L19.25 27L19.25 29Z" fill="white" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </section>
      </section>
    <Footer />
    <MobileFooter />
    <BottomAnn />
    </>
  )

}

export default Home