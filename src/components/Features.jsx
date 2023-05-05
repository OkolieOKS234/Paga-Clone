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
      <h2 className='ml-24'>Join over <span className='text-orange-500'>19million</span>people who use paga to</h2>
    {/* Features Boxes */}
    <div className='flex gap-4 flex-wrap items-center justify-center'>

<div className="box max-w-sm">
  <img src={SendMoneyIcon} alt="sendmoneyIcon" />
  <p>Send Money</p>
  <p>Send money instantly to anyone with a phone number, email address or bank account.</p>
 <p className='text-orange-500'>Read More</p>
</div>
<div className='box max-w-xs'>
<img src={RemittanceIcon} alt="" className='' />

</div>
<div className='box'>
<img src={ReceiveMoneyIcon} alt="" />
</div>
<div className='box'>
  <img src={RequestMoneyIcon} alt="" />
</div>
<div className='box'>
  <img src={PayBillsIcon} alt="" />
</div>
<div className='box'>
  <img src={TopupIcon} alt="" />
</div>

    </div>
    
    </section>
  )
}

export default Features