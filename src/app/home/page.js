
import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href={'/home/post'}>go to posts</Link>
      <Link href={'/home/notification'}>  go to notifications</Link>
    </div>
  )
}
