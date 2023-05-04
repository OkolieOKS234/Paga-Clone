import React, {useState} from 'react'
import LogoImage from "../assets/icons/Paga-logo.png"
import { HashLink } from 'react-router-hash-link';


function Navbar() {
// Links
let Links =[
    {name:"HOME",link:"#"},
    {name:"ABOUT",link:"#footer"},
    {name:"GAMES",link:"#section"},  
  ];


let [open, setOpen] = useState(false);

  return (
    <div className='shadow-sm w-full fixed top-0 left-0 '>
    <div className='  bg-white md:flex items-center justify-between  py-4 md:px-2 px-7'>
    <div className='font-bold bg-white  cursor-pointer flex items-center font-[Poppins] 
    text-gray-800'>
      <div className=' mr-1 p-0 m-0 '>
      <img src={LogoImage} alt="Maro_logo" className='ml-7 '/>
      </div>
     
    </div>
    
    <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-gray-900'>
    <ion-icon name={open ? 'close':'menu'}></ion-icon>
    </div>
    <ul className={` bg-green-950 md:flex md:items-center md:pb-0 pb-2 absolute md:static  z-[2] left-0 w-full  md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            
            <ul key={link.name} to={link.link} className='md:ml-8 text-xl md:my-0 my-7 text-white' smooth >
              <li className='text-white hover:text-gray-400 duration-500'>{link.name}</li>
            </ul>
          ))
        }
        
      </ul>
      </div>
    </div>


  )
}

export default Navbar