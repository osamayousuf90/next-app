import React from 'react'
import { useRouter } from 'next/router'

const Cards = ({ res }) => {
  const router = useRouter();

  return (
    <div>
    <div onClick={() => router.push(`/viewCard`)} className="Card">
      <div className="Card_inner">
          <h2> Id : {res?.id}</h2>   
        <span>This is comment</span>  
      </div>    
    </div>  
    </div>
  )
}

export default Cards