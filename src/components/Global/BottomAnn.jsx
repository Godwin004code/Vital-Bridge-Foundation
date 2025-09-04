import React from 'react'
import { Link } from 'react-router-dom'

const BottomAnn = () => {
  return (
    <div className='py-5' style={{borderTop: "1px solid #00000080"}}>
           <div className='w-[90%] mx-auto'>
           <div className='flex sm:flex-col justify-between'>
                <h2 className='text-[#900000] sm:text-center sm:mb-6'>&copy; VITALBRIDGEFOUNDATION.ORG</h2>
                <nav>
                    <ul className='flex justify-between gap-10 sm:gap-1'>
                <li>
                    <Link className='' style={{textDecoration: 'underline'}}>Terms of service</Link>
                </li>
                <li>
                    <Link style={{textDecoration: 'underline'}}>Privacy policy</Link>
                </li>
                <li>
                    <Link style={{textDecoration: 'underline'}}>Cookies</Link>
                </li>
                    </ul>
                </nav>
            </div>
           </div>
           
        </div>
  )
}

export default BottomAnn