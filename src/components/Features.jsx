import React from 'react'
// Icons
import SendMoneyIcon from "../assets/icons/sendmoney_logo.png"
import RemittanceIcon from "../assets/icons/Remittances_logo.png"
import ReceiveMoneyIcon from "../assets/icons/Receivemoney_logo.png"
import RequestMoneyIcon from "../assets/icons/Requestmoney.png"
import PayBillsIcon from "../assets/icons/pay_bills.png"
import TopupIcon from "../assets/icons/Airtime_Data.png"

const Features = () => {
  return (
    <section className='bg-white '>
      <h2 className='ml-24 text-4xl my-6 w-96'>Join over <span className='text-orange-500'>19million</span> people who use paga to</h2>
    {/* Features Boxes */}
    <div className='flex gap-4 flex-wrap items-center justify-center'>

<div className="box max-w-sm px-12 py-6">
  <img src={SendMoneyIcon} alt="sendmoneyIcon" />
  <p className='text-orange-500'>Send Money</p>
  <p className='text-xs'>Send money instantly to anyone with a phone number, email address or bank account.</p>
 <p className='text-orange-500'>Read More</p>
</div>
<div className='box max-w-xs px-12 py-6'>
<img src={RemittanceIcon} alt="" className='' />
<p className='text-orange-500'>Get Remittance</p>
<p className='text-xs'>Receive instant and secure money transfers from abroad to any Nigerian mobile phone number or bank account , using paga.</p>
<p className='text-orange-500'>Read More</p>
</div>
<div className='box max-w-sm px-12 py-6'>
<img src={ReceiveMoneyIcon} alt="" />
<p className='text-orange-500'>Receive Money</p>
<p className='text-xs'> Receive money instantly from anyone with a phone number, email address or bank account.</p>
<p className='text-orange-500'>Read More</p>
</div>
<div className='box max-w-sm px-12 py-6'>
  <img src={RequestMoneyIcon} alt="" />
  <p className='text-orange-500'>Request Money</p>
  <p className='text-xs'>Request money instantly from anyone with a phone number or email address.</p>
  <p className='text-orange-500'>Read More</p>
</div>
<div className='box max-w-sm px-12 py-6'>
  <img src={PayBillsIcon} alt="" />
  <p className='text-orange-500'>Pay Bills</p>
  <p className='text-xs'>Renew your Pay TV, Internet, Electricity and so much more with Paga’s smooth bill payment services.</p>
  <p className='text-orange-500'>Read More</p>
</div>
<div className='box max-w-sm px-12 py-6'>
  <img src={TopupIcon} alt="" />
  <p className='text-orange-500'>Top-up Airtime & Data</p>
  <p className='text-xs'>Top up your data and airtime instantly using Paga.</p>
  <p className='text-orange-500'>Read More</p>
</div>

    </div>
    
    </section>
  )
}

export default Features