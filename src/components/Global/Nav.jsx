
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/Brand Guide ( Samdenkens ) 1.png"
import hamburger from "../assets/hamburger.svg"
import cross from "../assets/cross.svg"
import navLogo from "../assets/Brand Guide ( Samdenkens ) 1.png"

const Nav = () => {
    const [mobileShown, setMobileShown] = useState(false);


    function toggleNav() {
      setMobileShown(!mobileShown);
    }
  return (
    <header className='flex justify-between py-0 px-10 sm:px-5 w-full bg-[#fff]'>
        
        <div className=' bg-white justify-center items-center flex py-0'>
           <Link to="/"> <img src={logo} alt="Samdenkens"  /></Link>
        </div>
       
        <nav className='w-[40%]  h-[100%] my-auto navbar-container sm:hidden'>
            <ul className='flex justify-between px-20 '>
                <li className='navbar-link'>
                <Link to="/" className='text-[#525560] text-lg '>Home</Link>
                <span className='w-[20px] h-[6px] rounded-xl under-bar bg-black' />
                </li>
                <li className='navbar-link'>
                    <Link to="/about" className='text-[#525560] text-lg '>About Us</Link>
                    <span className='w-[20px] h-[6px] rounded-xl under-bar bg-black' />
                </li>
                <li className='navbar-link'>
                    <Link to="/what-we-do" className='text-[#525560] text-lg '>What we do</Link>
                    <span className='w-[20px] h-[6px] rounded-xl under-bar bg-black' />
                </li>
               
                <li className='navbar-link'>
                    <Link to="/contact" className='text-[#525560] text-lg '>Contact Us</Link>
                    <span className='w-[20px] h-[6px] rounded-xl under-bar bg-black' />
                </li>

            </ul>
        </nav>
        <button className='w-[115px] sm:hidden my-auto h-[43px] bg-[#F59F24] text-white rounded-sm'>
            Donate
        </button>
        <button className="hidden lg:block w-[50px] ml-auto" onClick={toggleNav}>
        <svg className="hidden lg:block w-[50px] sm:w-[50px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black">
<g clip-path="url(#clip0_486_1117)">
<path d="M4 6H20" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 12H20" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 18H20" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_486_1117">
<rect width="24" height="24" fill="black"/>
</clipPath>

</defs>
</svg>
         
        </button>
        <div
          className={`${
            mobileShown
              ? "left-[0%] pointer-events-auto"
              : "left-[100%] pointer-events-none"
          } fixed bg-white h-full w-full z-[100] overflow-auto left-0 top-0 text-black duration-500 ease-in-out`}
        >
          {/* Container for logo and cross button */}
          <div className="w-[90%] mx-auto py-10 mb-[40px] flex justify-between">
            <Link to="/">
              {" "}
              <img src={navLogo}  alt="logo" />
            </Link>
            <button onClick={toggleNav}>
              <img className="w-[50px]" src={cross} alt="" />
            </button>
          </div>

          <ul className="flex my-auto gap-16 w-[90%] mx-auto flex-col text-3xl sm:text-xl sm:gap-8">
            <li>
              <Link to="/" className="font-medium">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="font-medium">
               About Us
              </Link>
            </li>
            <li>
              <Link to="/what-we-do" className="font-medium">
               What we do
              </Link>
            </li>
           
            
            <li>
              <Link to="/contact" className="font-medium">
                Contact Us
              </Link>
            </li>

            <Link to="/contact">
              <button className="bg-[#F59F24] text-white w-full mt-[50px] rounded-md py-4 px-10">
                Donate
              </button>
            </Link>
          </ul>
        </div>
       
    </header>
  )
}

export default Nav