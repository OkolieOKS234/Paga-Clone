import React, {useState} from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const Navbar = () => {
let links =[
  {name:"Services", link:"#"},
  {name:"Agent", link:"#"},
  {name:"Business", link:"#"},
  {name:"Developer", link:"#"},
  {name:"Company", link:"#"}
]

  const  [open, setOpen] = useState(false)
  return (
    <nav className='shadow-lg w-full fixed'>
<div className='flex md:flex items-center py-4 md:px-2 px-7 justify-around'>
<div className=''>
<div>

</div>


</div>
</div>
    </nav>
        
    
  )
}

export default Navbar