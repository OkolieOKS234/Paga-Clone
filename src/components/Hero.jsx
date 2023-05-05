import React from 'react';
import GadgetsImage from "../assets/laptopandPhone.png"

const Hero = () => {
  return (
    <section className='flex mt-24 ml-24 items-center'>
      <div className="heading max-w-lg">
      <p className='text-orange-500'>Your cash, anywhere, anytime</p> 
      <h1 className='header_text text-3xl font-semibold'>The Mobile <span className='text-orange-500'>operator</span> for you and your business</h1>
      <p className='text-xs'>We are building an ecosystem to enable people to digitally send and receive money, creating simple financial access for everyone.</p>
     <div className='flex items-center'>
     <button className='bg-orange-500 py-2 px-3 mt-6'>Create an account</button>
     <p className='self-center justify-self-center py-2 px-3 mt-6 text-orange-500 '>Learn More</p>
     </div>
     
      </div>
     
      <div className=" max-w-lg">
        <img src={GadgetsImage} alt="" />
      </div>
    </section>
  )
}

export default Hero