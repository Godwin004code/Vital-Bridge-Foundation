import React from 'react'
import Nav from '../Global/Nav'
import Footer from '../Global/Footer'
import MobileFooter from '../Global/MobileFooter'
import WhatWeDo from './WhatWeDo'
import SpecialNeeds from './SpecialNeeds'
import Projects from '../Home/Projects'
import Contribute from '../Home/Contribute'

const About = () => {
  return (
    <>
    <Nav />
    <WhatWeDo />
    <SpecialNeeds />
    <Projects />
    <Contribute />
    <Footer />
    <MobileFooter />
    </>
  )
}

export default About