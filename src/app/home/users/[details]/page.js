'use client'
import React from 'react'

export default function UserDetails(props) {
   const {details} = React.use(props.params)
  return (
    <div>
      <h1>User details</h1>
      <h3>User name:{details}</h3>
    </div>
  )
}
