import React from 'react';
import GadgetsImage from "../assets/laptopandPhone.png"

const Hero = () => {
  return (
    <section className='flex mt-24 ml-12'>
      <div className="max-w-lg">
      <p>Your cash, anywhere, anytime</p> 
      <h1 className='text-3xl font-semibold'>The Mobile payment operator for you and your business</h1>
      <p>We are building an ecosystem to enable people to digitally send and receive money, creating simple financial access for everyone.</p>
      </div>
      <div>
        <img src={GadgetsImage} alt="" />
      </div>
    </section>
  )
}

export default Hero