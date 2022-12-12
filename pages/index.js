import About from './about'
import { useState , useEffect } from 'react'
import { useRouter } from 'next/router'
import Navbar from '../Components/Navbar/Navbar';
import Cards from '../Components/Cards/Cards';
import { getSession } from "next-auth/react"
import { requireAuthentication } from '../requireAuthentication';
import axios from 'axios';


export async function getStaticProps() {

  const res = await axios.get('https://jsonplaceholder.typicode.com/comments')
  const posts = await res?.json()

  return {
    props: {
      posts,
    },
  }
}


export default function Index({posts}) {
  const router = useRouter();

  
  
  return (
    <>
      <Navbar/>
      <div className="homePage">
      <h2>I am Home</h2>
      <h2>Getting Data from SSR</h2>
        <div className="homePage_cards">
        {posts.map((res) => {
        return (
        <Cards res={res} />               
        )
        })}
      </div>  
      </div>
    </>
  )

}

