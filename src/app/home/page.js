'use client'
import Link from 'next/link'
import React from 'react'
import Script from 'next/script'
import Feedback from '@/components/Feedback'
import Dashboard from '../home/dashboard/page'

export default function Home() {
  return (
    <div>
      {/* <h1>Home Page</h1>
      <Link href={'/home/post'}>go to posts</Link>
      <Link href={'/home/notification'}>  go to notifications</Link> */}
    <Dashboard></Dashboard>
    </div>
  )
}
