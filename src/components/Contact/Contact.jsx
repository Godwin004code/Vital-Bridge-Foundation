import React from 'react'
import Nav from '../Global/Nav'
import Footer from '../Global/Footer'
import MobileFooter from '../Global/MobileFooter'
import ContactHero from './ContactHero'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <>
    <Nav />
    <ContactHero />
    <ContactForm />
    <div className='w-full h-[400px]'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.7669507202145!2d-0.19781442299300492!3d51.499144011305994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760ff15fe952bb%3A0xbe07f069756b6c2d!2sPhillimore%20Terrace%2C%20Allen%20St%2C%20London%20W8%206BJ%2C%20UK!5e0!3m2!1sen!2sng!4v1709583771791!5m2!1sen!2sng" width="100%" height="100%" style={{"border" :0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <Footer />
    <MobileFooter />
    </>
  )
}

export default Contact
