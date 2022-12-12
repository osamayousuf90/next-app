import React from 'react'
import { useRouter } from 'next/router'

const pageNo = () => {
    const router = useRouter()
    const { pageNo } = router.query

  return (
    <div>
          <h1>Hello This Is Page { pageNo }</h1>
    </div>
  )
}

export default pageNo