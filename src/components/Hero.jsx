import React from 'react';
import GadgetsImage from "../assets/laptopandPhone.png"

const Hero = () => {
  return (
    <section className='hero flex mt-24 px-32 items-center gap-14 md:flex-wrap sm:flex-wrap'>
      <div className="heading max-w-lg">
      <p className='header_hidden text-orange-500'>Your cash, anywhere, anytime</p> 
      <h1 className='header_text text-4xl font-semibold'>The Mobile <span className='text-orange-500'>operator</span> for you and your business</h1>
      <p className=' hero_paragraph text-xs max-w-md'>We are building an ecosystem to enable people to digitally send and receive money, creating simple financial access for everyone.</p>
     
     <div className=' account_hero flex items-center flex-wrap'>
      <div>
      <button className='bg-orange-500 py-2 px-12 mt-6'>Create an account</button>
      </div>
   
      <div>
      <p className='self-center justify-self-center py-2 px-3 mt-6 text-orange-500 '>Learn More</p>
      </div>
     
    
     </div>
     
      </div>
     
      <div className=" max-w-lg">
        <img src={GadgetsImage} alt="" className='gadget_img' />
      </div>
    </section>
  )
}

export default Hero