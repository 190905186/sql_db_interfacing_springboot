import Head from 'next/head'
import Image from 'next/image'
import Homepage from './homepage'
import Navbar from '../components/Navbar'
import Skills from './skills'
import styles from '../styles/Home.module.css'
import Projects from './projects'

export default function Home() {
  return (
    <div>
     <Navbar></Navbar>
     <Homepage></Homepage>
     <Skills></Skills>
     <Projects></Projects>
    </div>
   
  )
}
