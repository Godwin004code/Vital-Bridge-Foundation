import React, { useState, useRef } from 'react'
import emailjs from "@emailjs/browser"

const ContactForm = () => {
  return (
    <form className='py-20 w-[50%] sm:w-[90%] mx-auto flex flex-col justify-center items-center'>
        <section className='w-full flex gap-10 mb-10'>
    <div className='w-full'>
        <label htmlFor="FName" className='text-[#1D2130] text-sm font-bold'>First Name</label>
        <input type="text" id='Fname' className='block focus:outline-none w-full' style={{borderBottom: '1px solid black'}}  />
    </div>
    <div className='w-full'>
        <label htmlFor="LName" className='text-[#1D2130] text-sm font-bold'>Last Name</label>
        <input type="text" id='Lname' className='block focus:outline-none w-full' style={{borderBottom: '1px solid black'}}  />
    </div>
        </section>
        <section className='w-full flex gap-10 mb-10'>
    <div className='w-full'>
        <label htmlFor="email" className='text-[#1D2130] text-sm font-bold'>Email</label>
        <input type="text" id='email' className='block focus:outline-none w-full' style={{borderBottom: '1px solid black'}}  />
    </div>
    <div className='w-full'>
        <label htmlFor="num" className='text-[#1D2130] text-sm font-bold'>Phone Number</label>
        <input type="text" id='num' className='block focus:outline-none w-full' style={{borderBottom: '1px solid black'}}  />
    </div>
        </section>
        <div className='w-full'>
        <label htmlFor="num" className='text-[#1D2130] text-sm font-bold'>Message</label>
       
        <textarea rows={10} placeholder='Type your message' className='w-full pl-3 mt-3 pt-3 block focus:outline-none' style={{border: '1px solid black'}}></textarea>
    </div>
    <button className='w-[146px] h-[51px] bg-[#900000] text-white mt-10 text-black rounded-md'>
               Send Message
            </button>
    </form>
  )
}

export default ContactForm