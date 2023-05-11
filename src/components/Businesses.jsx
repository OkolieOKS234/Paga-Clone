import React from 'react'
import Business from "../assets/brands/businesses.png"
const Businesses = () => {
  return (
    <section className='bg-white px-24'>
        <h3 className='text-3xl max-w-md'>We are proud to be partnering with over <span className='  text-orange-500'>6000</span> businesses</h3>
    <img src={Business} alt="" />
    </section>
  )
}

export default Businesses