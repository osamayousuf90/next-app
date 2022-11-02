import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Script from 'next/script'
import About from './about'
import { useState } from 'react'

export default function Home() {
  const [view , setView] =  useState(false)
  return (
    <>
      <div> 
      Hello i am home
        <button onClick={() => setView(!view)} >Show</button>
      { view && <About pagal={"pagal"} /> }  
      </div>   
    </>
  )
}
