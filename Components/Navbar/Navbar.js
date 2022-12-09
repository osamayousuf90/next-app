import React from 'react'
import logo from "../../Assets/logo2.jpg";
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  
  // handle logout 
  const handleLogout = () => {
    window.localStorage.clear()
    router.push("/login")
  }
  return (
    <div>
        <div className="navbar">
              <div className="navbar_logo"> <Image className='logoImg' src={logo} alt="No"/> </div>
            <div className="navbar_welcome">Welcome</div>  
            <div className="navbar_links">
                <p onClick={() => router.push("/")}>Home</p>
                <p onClick={() => router.push("/contact")}>Contact</p>                    
                <p onClick={() => router.push("/about")}>About</p>  
                <span onClick={ () =>  handleLogout() } className='logout'>Logout</span>  
            </div>  
        </div>
    </div>
  )
}

export default Navbar