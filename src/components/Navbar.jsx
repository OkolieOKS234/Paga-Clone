import React, {useState} from 'react'
import LogoImage from "../assets/icons/Paga-logo.png"
import { HashLink } from 'react-router-hash-link';
import NigeriaFlag from "../assets/icons/nigeria.png"


function Navbar() {
// Links
let Links =[
    {name:"Services",link:"#"},
    {name:"Agent",link:"#footer"},
    {name:"Business",link:"#section"},  
    {name:"Developer",link:"#section"},  
    {name:"Company",link:"#section"},  
  ];


let [open, setOpen] = useState(false);

  return (
    <div className=' navbar w-full fixed top-0 left-0 '>
    <div className='  bg-white md:flex items-center py-4 md:px-2 px-7 gap-7 '>
    <div className='font-bold bg-white  cursor-pointer flex items-center font-[Poppins] 
    text-gray-800'>
      <div className=' mr-1 p-0 m-0 '>
      <img src={LogoImage} alt="Maro_logo" className='ml-7 '/>
      </div>
     
    </div>
    
    <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-gray-900'>
    <ion-icon name={open ? 'close':'menu'}></ion-icon>
    </div>
    <ul className={` bg-white md:flex md:items-center md:pb-0 pb-2  absolute md:static  z-[2]  w-full  md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            
            <ul key={link.name} to={link.link} className='md:ml-6 text-sm md:my-0 my-7 text-orange-500 ' smooth >
              <li className='text-orange-500 hover:text-gray-400 duration-500 '>{link.name}</li>
           
            </ul>
          ))
          
        }
         <img src={NigeriaFlag} alt="Nigerian flag" className=' md:ml-6 text-sm md:my-0 my-7'/>
        <li className='text-orange-500  md:ml-6 text-sm md:my-0 my-7'>Login</li>
        <button className='bg-orange-500 w-32 pt-1 pb-1 ml-12 rounded'>Get Started</button>
       
      </ul>
      <div>
       
      </div>
      </div>
    </div>


  )
}

export default Navbar