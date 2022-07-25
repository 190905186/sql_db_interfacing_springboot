import React from 'react'
import Image from 'next/image'
import heroinImage from "../public/pooja-hegde_1-2.jpg"

function homepage() {
  return (
    <div>
        <div className='flex justify-between text-center md:mx-20 md:pt-32 pt-28'>
           <div className='w-3/4 h-96 shadow-xl rounded-full relative px-10 hidden md:block'>
                <Image src={heroinImage} alt='heroinimage' layout='fill' objectFit='cover' className='rounded-full cursor-pointer hidden md:block'/>
           </div>
           <div className='flex flex-col md:ml-20 mx-10 mt-10'>
                <h1 className='font-bold text-7xl text-left mb-5'>
                    Hello ,i am <span className='text-indigo-900'>Pooja hegde</span>
                </h1>
                 <p className='text-left font-normal mb-5 flex-wrap'>
                 Hegde competed in the Miss India 2009 competition, but was eliminated in an early round despite winning the Miss India Talented 2009 honour. She re-applied the following year and was the second runner-up in the Miss Universe India 2010 competition, while also being crowned Miss India South Glamorous Hair 2010 in the subsidiary competition.
                 </p>
                 <a href="#" className='font-semifold text-white md:mt-10 mt-5 pt-5 bg-indigo-900 rounded-md w-60 h-16 text-lg hover:bg-black '>
                    Know about me!
                 </a>
           </div>
        </div>
    </div>
  )
}

export default homepage