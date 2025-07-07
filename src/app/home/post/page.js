'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import React from 'react'

function Post() {
    const router = useRouter()
  //  const{deatils}= React.use(props.params)
  return (
    <div>
      <p>post here</p>
      <Link href={'/home'}>Go back</Link>
      <button onClick={()=> router.push('/')}>Go to Main page</button>
      {/* <h1>catch all segments: page 1 = {deatils.post[0]}</h1>
      <h1>catch all segments: post = {deatils.post[1]}</h1> */}
    </div>
  )
}

export default Post
