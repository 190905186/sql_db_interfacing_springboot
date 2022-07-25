import React, { useState } from 'react'
import {Transition} from "@headlessui/react"
import {Link} from "react-scroll"
function Navbar() {
    const [isopen,setisopen]=useState(false)
  return (
    <div>
      <nav className='fixed z-20 bg-white w-full'>
        <div className='w-full'>
            <div className='flex items-center h-20 w-full'>
            <div className='flex items-center sm:mx-10 md:mx-20 justify-between w-full'>
                    <div className='flex justify-center items-center flex-shrink-0'>
                        <h1 className='font-bold text-xl cursor-pointer'>
                            Stream<span className='text-blue-600'>line</span>
                        </h1>
                    </div>
                    <div className='hidden md:block'>
                        <div className='ml-10 flex item-baseline space-x-4'>
                            <Link activeclass='homepage' to='homepage' smooth={true} offset={50} duration={500} className='cursor-pointer hover:text-blue-600 px-3 py-2 text-md'>Home</Link>
                            <Link activeclass='skills' to='skills' smooth={true} offset={50} duration={500} className='cursor-pointer hover:text-blue-600 px-3 py-2 text-md'>Skills</Link> 
                            <Link activeclass='projects' to='projects' smooth={true} offset={50} duration={500} className='cursor-pointer hover:text-blue-600 px-3 py-2 text-md'>Projects</Link>
                            {/* <Link activeclass='experience' to='experience' smooth={true} offset={50} duration={500} className='cursor-pointer hover:text-blue-600 px-3 py-2 text-md'>Experience</Link>
                            <Link activeclass='contact' to='contact' smooth={true} offset={50} duration={500} className='cursor-pointer hover:text-blue-600 px-3 py-2 text-md'>Contact</Link>
                            <Link activeclass='hobbies' to='hobbies' smooth={true} offset={50} duration={500} className='cursor-pointer hover:text-blue-600 px-3 py-2 text-md'>Hobbies</Link> */}
                        </div>
                    </div>    
                    <div className='flex justify-center items-center flex-shrink-0'>
                        <h1 className='font-semibold text-lg cursor-pointer hidden md:block'>
                            say<span className='text-blue-600'>hi</span>
                        </h1>
                    </div>  
                    <div className='mr-14 flex md:hidden'>
                        <button onClick={()=>setisopen(!isopen)}
                                type='button' className='bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-black focus:outline-none focus:ring-white'
                                aria-controls='mobile-menu'
                                aria-expanded='false'>
                            <span className='sr-only'>Open main menu</span>
                            {!isopen? 
                            (
                               <svg className='block h-6 w-6' xmlns='https://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentcolor' aria-hidden='true'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path></svg>
                            ):
                            (
                                <svg className='block h-6 w-6' xmlns='https://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentcolor' aria-hidden='true'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path></svg> 
                            )
                            }


                        </button>
                    </div>
                </div> 
            </div>
        </div> 
        <Transition show={isopen} enter='transition ease-out duration-100 transform' enterFrom='opacity=0 scale-95' enterTo='opacity-100 scale-100' leave='transition ease-in duration-75 transform' leaveFrom='opacity-100 scale-100' leaveTo='opacity-0 scale-95'>
            {
                (ref) => (
                    <div className='md:hidden' id='mobile-menu'>
                        <div ref={ref} className="bg-white mx-4 mr-20 pt-4 pb-4 space-y-1">
                            <Link href='/homepage' activeClass='homepage' to='homepage' smooth={true} offset={50} duration={500} className='cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium '>Home</Link>
                            <Link href='/skills' activeClass='skills' to='skills' smooth={true} offset={50} duration={500} className='cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium '>Skills</Link>
                            <Link href='/projects' activeClass='projects' to='projects' smooth={true} offset={50} duration={500} className='cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium '>Projects</Link>
                            {/* <Link href='/experiece' activeClass='experience' to='experience' smooth={true} offset={50} duration={500} className='cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium '>Experiece</Link>
                            <Link href='/contact' activeClass='contact' to='contact' smooth={true} offset={50} duration={500} className='cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium '>Contact</Link>
                            <Link href='/hobbies' activeClass='hobbies' to='hobbies' smooth={true} offset={50} duration={500} className='cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium '>Hobbies</Link> */}
                        </div>

                    </div>
                )
            }
                            
        </Transition> 
        
      </nav>  
    </div>
  )
}

export default Navbar