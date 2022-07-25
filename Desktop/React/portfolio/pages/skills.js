import React from 'react'
import {Element} from 'react-scroll'
import {Image } from 'next/image'
import {GiCardboardBox} from 'react-icons/gi'
import {HiColorSwatch} from 'react-icons/hi'
import {MdDeveloperBoard} from 'react-icons/md'
import {AiOutlineBlock } from 'react-icons/ai'
import {FaReact} from 'react-icons/fa'
import {FaNodeJs} from 'react-icons/fa'
import machinelearninglogo from '../public/machinelearninglogo.jpeg'
import computervisionlogo from '../public/computervisionlogo.jpg'
import deeplearninglogo from '../public/deeplearninglogo.jpeg'
import nextjslogo from '../public/nextjslogo.png'
import nlplogo from '../public/nlplogo.png'
import mongodblogo from '../public/mongodblogo.jpg'
import sqllogo from '../public/sqllogo.jpg'
import expressjslogo from '../public/expressjslogo.png'
function skills() {
  return (
    <Element id='skills' name='skills'>
        <div className='w-full my-40 h-auto flex flex-col justify-center items-center'>
            <p className='text-sm uppercase text-gray=400'>
                My skills
            </p>
            <h1 className='text-indigo-900 text-6xl font-bold text-center'>My Expertise</h1 >
            <div className='flex justify-items-start items-center mx-40 gap-10 mt-20'>
                <div className='flex flex-col justify-cneter items-center'>
                    <div className='flex justify-center items-center cursor-pointer'>
                        <FaReact className='w-10 h-10 bg-yellow-400 text-gray-100 m-2 p-1 shadow-xl rounded-md'/>
                        <h2 className='text-xl text-indigo-600 font-semibold'>ReactJs</h2>   
                    </div>
                    <p className='md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm'>
                       React is a free and open-source front-end JavaScript library for building user interfaces based on UI components
                    </p>
                </div>
                <div className='flex flex-col justify-cneter items-center'>
                    <div className='flex justify-center items-center cursor-pointer'>
                        <FaNodeJs className='w-10 h-10 bg-yellow-400 text-gray-100 m-2 p-1 shadow-xl rounded-md'/>
                        <h2 className='text-xl text-indigo-600 font-semibold'>NodeJs</h2>   
                    </div>
                    <p className='md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm'>
                    Next.js is an open-source web development framework built on top of Node.js enabling React-based web applications functionalities such as server-side rendering and generating static websites.
                    </p>
                </div>
             </div>

             <div className='flex justify-items-start items-center mx-40 gap-10 mt-20'>
                <div className='flex flex-col justify-cneter items-center'>
                    <div className='flex justify-center items-center cursor-pointer'>
                        {/* <Image src={machinelearninglogo} className='w-10 h-10 bg-yellow-400 text-gray-100 m-2 p-1 shadow-xl rounded-md'/> */}
                        <h2 className='text-xl text-indigo-600 font-semibold'>Machine Learning</h2>   
                    </div>
                    <p className='md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm'>
                    Machine learning (ML) is a type of artificial intelligence (AI) that allows software applications to become more accurate at predicting outcomes without being explicitly programmed to do so.
                    </p>
                </div>
                <div className='flex flex-col justify-cneter items-center'>
                    <div className='flex justify-center items-center cursor-pointer'>
                        {/* <Image src={deeplearninglogo} className='w-10 h-10 bg-yellow-400 text-gray-100 m-2 p-1 shadow-xl rounded-md'/> */}
                        <h2 className='text-xl text-indigo-600 font-semibold'>Deep Learning</h2>   
                    </div>
                    <p className='md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm'>
                    Deep learning is a type of machine learning and artificial intelligence (AI) that imitates the way humans gain certain types of knowledge. 
                    </p>
                </div>
             </div>

             <div className='flex justify-items-start items-center mx-40 gap-10 mt-20'>
                <div className='flex flex-col justify-cneter items-center'>
                    <div className='flex justify-center items-center cursor-pointer'>
                        {/* <Image src={computervisionlogo} className='w-10 h-10 bg-yellow-400 text-gray-100 m-2 p-1 shadow-xl rounded-md'/> */}
                        <h2 className='text-xl text-indigo-600 font-semibold'>Computer Vision</h2>   
                    </div>
                    <p className='md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm'>
                    Computer vision is a field of artificial intelligence (AI) that enables computers and systems to derive meaningful information from digital images, videos and other visual inputs 
                    </p>
                </div>
                <div className='flex flex-col justify-cneter items-center'>
                    <div className='flex justify-center items-center cursor-pointer'>
                        {/* <Image src={nlplogo} className='w-10 h-10 bg-yellow-400 text-gray-100 m-2 p-1 shadow-xl rounded-md'/> */}
                        <h2 className='text-xl text-indigo-600 font-semibold'>Natural Language Processing</h2>   
                    </div>
                    <p className='md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm'>
                    Natural language processing is a subfield of linguistics, computer science, and artificial intelligence concerned with the interactions between computers and human language, in particular how to program computers to process and analyze large amounts of natural language data
                    </p>
                </div>
             </div>

             <div className='flex justify-items-start items-center mx-40 gap-10 mt-20'>
                <div className='flex flex-col justify-cneter items-center'>
                    <div className='flex justify-center items-center cursor-pointer'>
                        {/* <Image src={expressjslogo} className='w-10 h-10 bg-yellow-400 text-gray-100 m-2 p-1 shadow-xl rounded-md'/> */}
                        <h2 className='text-xl text-indigo-600 font-semibold'>Express Js</h2>   
                    </div>
                    <p className='md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm'>
                    Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs
                    </p>
                </div>
                <div className='flex flex-col justify-cneter items-center'>
                    <div className='flex justify-center items-center cursor-pointer'>
                        <FaNodeJs className='w-10 h-10 bg-yellow-400 text-gray-100 m-2 p-1 shadow-xl rounded-md'/>
                        <h2 className='text-xl text-indigo-600 font-semibold'>Nodejs</h2>   
                    </div>
                    <p className='md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm'>
                    Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications.
                    </p>
                </div>
             </div>
             <div className='flex justify-items-start items-center mx-40 gap-10 mt-20'>
                <div className='flex flex-col justify-cneter items-center'>
                    <div className='flex justify-center items-center cursor-pointer'>
                        <FaReact className='w-10 h-10 bg-yellow-400 text-gray-100 m-2 p-1 shadow-xl rounded-md'/>
                        <h2 className='text-xl text-indigo-600 font-semibold'>MongoDB</h2>   
                    </div>
                    <p className='md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm'>
                    MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. 
                    </p>
                </div>
                <div className='flex flex-col justify-cneter items-center'>
                    <div className='flex justify-center items-center cursor-pointer'>
                        <FaNodeJs className='w-10 h-10 bg-yellow-400 text-gray-100 m-2 p-1 shadow-xl rounded-md'/>
                        <h2 className='text-xl text-indigo-600 font-semibold'>Sql</h2>   
                    </div>
                    <p className='md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm'>
                    MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. 
                    </p>
                </div>
             </div>
        </div>
    </Element>
  )
}

export default skills