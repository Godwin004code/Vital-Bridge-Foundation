import React, { useEffect, useRef } from 'react'
import Chart from "chart.js/auto"

const Howwespend = () => {
  
  return (
    <div className='bg-[#0C7B3B] py-20 w-full'>
      <section className='w-[90%] mx-auto flex  sm:flex-col'>
    <div>
      <h2  className='text-white text-5xl sm:text-2xl font-bold'>How we spend your </h2>
      <h2  className='text-white text-5xl sm:text-2xl font-bold'>donations and where it goes</h2>
      <p className='text-[#e1dcdc] sm:text-sm text-base my-8 sm:w-[100%] w-[50%]'>
      We understand that when you make a  donation, you want to know exactly where your money is going and we pledge to be transparent.
      </p>
      <section>
        <div className='flex gap-2 mb-2'>
          <div className='w-[16px] h-[16px] my-auto bg-[#FFFFFF] rounded-[4px]'></div>
          <h2 className='text-base sm:text-sm  font-medium  text-white'>40% goes to environment</h2>
        </div>
        <div className='flex gap-2 mb-2'>
          <div className='w-[16px] h-[16px] my-auto bg-[#AC94F1] rounded-[4px]'></div>
          <h2 className='text-base sm:text-sm  font-medium  text-white'>35% goes to health projects</h2>
        </div>
      </section>
      <section >
        <div className='flex gap-2 mb-2'>
          <div className='w-[16px] h-[16px] my-auto bg-[#990000] rounded-[4px]'></div>
          <h2 className='text-base sm:text-sm font-medium  text-white'>15% goes to education and scholarships</h2>
        </div>
        <div className='flex gap-2 mb-2'>
          <div className='w-[16px] h-[16px] my-auto bg-[#F38FBF] rounded-[4px]'></div>
          <h2 className='text-base sm:text-sm  font-medium  text-white'>10% goes to Human capacity developments</h2>
        </div>
      </section>
    </div>
    <div>
    <svg className='w-[350px] h-[350px] sm:w-full' viewBox="0 0 375 375" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M187.5 0C229.114 4.96237e-07 269.545 13.8435 302.425 39.3499C335.305 64.8563 358.766 100.576 369.113 140.883C379.459 181.19 376.102 223.794 359.571 261.983C343.041 300.172 314.275 331.777 277.806 351.82L234.94 273.822C254.098 263.293 269.21 246.69 277.894 226.628C286.578 206.566 288.341 184.185 282.906 163.011C277.471 141.837 265.146 123.072 247.873 109.673C230.6 96.2737 209.361 89.0013 187.5 89.0013L187.5 0Z" fill="white"/>
<path d="M277.822 351.811C245.324 369.675 208.259 377.501 171.313 374.3C134.368 371.099 99.2013 357.013 70.2608 333.826C41.3203 310.638 19.9057 279.389 8.72493 244.031C-2.45579 208.672 -2.90046 170.793 7.44716 135.181L92.9135 160.016C87.4776 178.723 87.7112 198.622 93.5848 217.197C99.4583 235.772 110.708 252.188 125.911 264.369C141.114 276.55 159.588 283.949 178.997 285.631C198.405 287.313 217.877 283.201 234.948 273.817L277.822 351.811Z" fill="#990000"/>
<path d="M7.33821 135.558C17.2778 101.082 36.9003 70.1827 63.8768 46.5264L122.557 113.443C108.386 125.87 98.0778 142.103 92.8563 160.213L7.33821 135.558Z" fill="#FFF0CA"/>
<path d="M62.9118 47.3785C88.673 24.4731 120.25 9.11274 154.173 2.9856L169.992 90.5697C152.172 93.7885 135.584 101.858 122.051 113.891L62.9118 47.3785Z" fill="black"/>
<path d="M153.259 3.15308C165.951 0.795575 178.853 -0.244845 191.759 0.0483727L189.737 89.0267C182.957 88.8727 176.18 89.4193 169.512 90.6577L153.259 3.15308Z" fill="#F38FBF"/>
</svg>  
    </div>
      </section>
    </div>
  )
}

export default Howwespend