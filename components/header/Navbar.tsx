'use client'
import Link from 'next/link'
import Image from 'next/image'
import icon8 from '@/public/menu.svg'
import close from '@/public/close.svg'
import { useState } from 'react';






const Navbar = () => {
  

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  

  return (
    <>
      <div className=' nav bg-black h-24 '>
       <div className='justify-between items-start pt-7 flex px-4 '>
       <div className="logo">
            <p className='text-white text-4xl'><Link href='/'>EV</Link></p>
        </div>
        <div className='flex'>
        <div className='text-white hidden  md:block md:order-1'>
          <ul className= "flex md:flex-row  md:space-x-5 font-medium text-xl cursor-pointer text-white " >
            
            <li className='hover:scale-105  hover:text-blue-100'> <Link href='/top'>Top6</Link></li>
            <li className='hover:scale-105  hover:text-blue-100'> <Link href={''} >Search</Link></li>
            <li className='hover:scale-105  hover:text-blue-100'> <Link href={''}>Service</Link></li>
          </ul>

          

        </div>
        <div className="menu-icon h-10 md:hidden block" onClick={toggleMenu}>
          {isMenuOpen?<Image src={close} alt='close-icon' className='h-[30px]'/> : <Image src={icon8} alt='menu-icon' className='h-[30px]'/>}
        </div>
        </div>
       
        
       <div className='text-white hidden md:block '>
          <p>Order</p>
        </div>
       
      
       </div>
       {isMenuOpen && (
        <div className="div bg-black h-screen md:hidden block mt-5 absolute top-10 left-0 bottom-10 right-0 ">
          <ul className="div px-2 text-white  text-center space-y-6 pt-20 text-xl ">

            <li className='hover:scale-105  hover:text-blue-100'> <Link href='/top'>Top6</Link></li>
            <li className='hover:scale-105  hover:text-blue-100'> <Link href={''}>Search</Link></li>
            <li className='hover:scale-105  hover:text-blue-100'> <Link href={''}>Service</Link></li>

          </ul>
        </div>
       )}
    </div>
   
    
    
   </> 
  )
}

export default Navbar