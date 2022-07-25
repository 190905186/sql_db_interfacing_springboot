import React from 'react'
import Image from 'next/image'
import {Element} from 'react-scroll'
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
import Projectbox from '../components/projectbox'

function projects() {
  return (
    <Element id='projects' name='projects'>
        <div className='w-full my-20 h-auto flex flex-col justify-center items-center'>
            <p className='text-sm uppercase text-gray-400'>Portfolio</p>
            <h2 className='text-indigo-900 text-6xl font-bold text-center'>All Projects</h2>
            <Projectbox/>
            <Projectbox/>
            <Projectbox/>
        </div>
    </Element>
  )
}

export default projects