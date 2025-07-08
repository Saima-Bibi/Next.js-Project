'use client'

import React from 'react'
import Script from 'next/script'

export default function Home() {
  return (
    <div>
      <h1>Script Component</h1>
     
      <Script src='/library.js' onLoad={()=>{
 console.log('library code executed only in Login component')
}}/> 
    </div>
  )
}
