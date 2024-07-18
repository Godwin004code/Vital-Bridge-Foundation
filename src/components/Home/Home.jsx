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


const Home = () => {
  return (
    <>
    <Nav />
    <Hero />
    <About />
<What />
    <Projects />
    <Howwespend />
    <Contribute />
    <Footer />
    <MobileFooter />
    </>
  )
}

export default Home