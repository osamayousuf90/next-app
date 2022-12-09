import About from './about'
import { useState } from 'react'
// import { useRouter } from 'next/router'
import Navbar from '../Components/Navbar/Navbar';
import Cards from '../Components/Cards/Cards';

export default function Index() {
  const [view, setView] = useState(false)
  // const navigation = useRouter();
  return (
    <>
      <Navbar/>
      <div className="homePage">
      <h2>I am Home</h2>
      <h2>Getting Data from SSR</h2>
      <div className="homePage_cards">
          <Cards />   
          <Cards />   
          <Cards/>    
          <Cards/>    
          <Cards/>    
          <Cards/>    
          <Cards/>    
          <Cards/>    
          

      </div>  
      </div>
    </>
  )
}
