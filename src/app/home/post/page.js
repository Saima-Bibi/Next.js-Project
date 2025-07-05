'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import React from 'react'

function Post() {
    const router = useRouter()
  return (
    <div>
      <p>post here</p>
      <Link href={'/home'}>Go back</Link>
      <button onClick={()=> router.push('/')}>Go to Main page</button>
    </div>
  )
}

export default Post
