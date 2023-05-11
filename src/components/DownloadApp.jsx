import React from 'react'
import PlaystoreButton from "../assets/playstore.png"
import AppstoreButton from "../assets/appstore.png"
import HandImage from "../assets/hand_holding_phone.png"

export const DownloadApp = () => {
  return (
    <section className='bg-white px-12 py-12'>
      <div className=' flex px-14 gap-48 bg-orange-500 w-11/12 rounded-lg mx-5  py-4 text-white'>
     <div className='py-6'>
      <button className=' px-6 py-4 bg-yellow-500 rounded-full'>Paga is wherever you are!</button>
      <p className=' text-2xl max-w-xs font-semibold text-white '>Download the app, visit the mobile site, or dial *242# to transact.</p>
      <div className='flex gap-4'>
      <img src={PlaystoreButton} alt="" className='cursor-pointer' />
      <img src={AppstoreButton} alt="" className='cursor-pointer' />
      </div>
      </div>
{/* second side */}
<div>
<img src={HandImage} alt="hand_holding_phone" />
</div>


      </div>
    </section>
  )
}
