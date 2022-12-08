import About from './about'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Navbar from '../Components/Navbar/Navbar';

export default function Index() {
  const [view, setView] = useState(false)
  const navigation = useRouter();
  return (
    <>
      <Navbar/>
      <div className="homePage">
      <h2>I am Home</h2>
      </div>
    </>
  )
}
