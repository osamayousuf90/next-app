import About from './about'
import { useState , useEffect } from 'react'
import { useRouter } from 'next/router'
import Navbar from '../Components/Navbar/Navbar';
import Cards from '../Components/Cards/Cards';
import { getSession } from "next-auth/react"
import { requireAuthentication } from '../requireAuthentication';
import axios from 'axios';


export default function Index() {
  const [view, setView] = useState(false)
  const [list , setList] = useState([])
  const router = useRouter();

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
      setList(res?.data)
    }).catch((err) => {
     console.log("err ===>", err);
   })
  }, [])
  
  
  return (
    <>
      <Navbar/>
      <div className="homePage">
      <h2>I am Home</h2>
      <h2>Getting Data from SSR</h2>
        <div className="homePage_cards">
        {list.map((res) => {
        return (
        <Cards res={res} />               
        )
        })}
      </div>  
      </div>
    </>
  )

}

