import React from 'react'
import Image from 'next/image'
import {BsGithub} from 'react-icons/bs'
import {CgWebsite} from 'react-icons/cg'
import machinelearninglogo from '../public/machinelearninglogo.jpeg'
import computervisionlogo from '../public/computervisionlogo.jpg'
import deeplearninglogo from '../public/deeplearninglogo.jpeg'
import nextjslogo from '../public/nextjslogo.png'
import nlplogo from '../public/nlplogo.png'
import mongodblogo from '../public/mongodblogo.jpg'
import sqllogo from '../public/sqllogo.jpg'
import expressjslogo from '../public/expressjslogo.png'
function Projectbox() {
  return (
    <div className='flex flex-col my-7 ml-20 mr-10'>
        <p className='text-gray-600 mt-10 font-bold text-3xl '>1.Project1</p>
        <h2 className='text-black mt-10 ml-7 font-bold'>Description:</h2>
        <p className='text-black flex-wrap mt-5 ml-7 mr-20'>
            MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas
            10gen software company began developing MongoDB in 2007 as a component of a planned platform as a service product. In 2009, the company shifted to an open-source development model, with the company offering commercial support and other services. In 2013, 10gen changed its name to MongoDB Inc.[5]
            On October 20, 2017, MongoDB became a publicly traded company, listed on NASDAQ as MDB with an IPO price of $24 per share.[6]
            MongoDB is a global company with US headquarters in New York City and International headquarters in Dublin.
            On October 30, 2019, MongoDB teamed up with Alibaba Cloud, who will offer its customers a MongoDB-as-a-service solution. Customers can use the managed offering from BABA's global data centers.[7]     
        </p>
        <p className='text-black mt-10 ml-7 font-bold'>Skills Used:<span className='text-blue-400'> ReactJs,NodeJs,NextJs</span></p>
        <div className=' flex flex-row'>
            <p className='text-black mt-10 ml-7 font-bold'>Related links:</p>  
            <div className='flex flex-col'>
                <a href='https://github.com/190905186'><BsGithub className='w-10 h-10 bg-black text-gray-100 m-2 p-1 shadow-xl rounded-md ml-5 mt-8'/></a>
                <p className='ml-4 '>github</p>
            </div>
            <div className='flex flex-col'>
                <a href='https://github.com/190905186'><CgWebsite className='w-10 h-10 bg-black text-gray-100 m-2 p-1 shadow-xl rounded-md ml-5 mt-8'/></a>
                <p className='ml-4 '>website</p>
            </div>
        </div>
        <div>
            <p className='text-black mt-10 ml-7 font-bold'>Related Photos:</p>  
            <div className='md:flex sm:flex-col md:flex-row justify-center items-center gap-10 mt-10 mr-20 ml-7'>
                <div className='rounded w-80 h-60 shadow-xl relative'>
                    <Image src={machinelearninglogo} alt='one' layout='fill' objectFit='cover'  className='rounded cursor-pointer p-2'/>      
                </div>
                <div className='rounded w-80 h-60 shadow-xl relative'>
                    <Image src={deeplearninglogo} alt='one' layout='fill' objectFit='cover'  className='rounded cursor-pointer p-2'/>      
                </div>
                <div className='rounded w-80 h-60 shadow-xl relative'>
                    <Image src={nlplogo} alt='one' layout='fill' objectFit='cover'  className='rounded cursor-pointer p-2'/>      
                </div>
            </div>  
        </div>
    </div>
  )
}

export default Projectbox