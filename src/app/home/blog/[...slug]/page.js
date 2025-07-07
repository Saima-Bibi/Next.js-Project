import React from 'react'

export default async function Blog(props) {
    const{slug} = await props.params
    console.log('log here',slug)
  return (
    <div>
      <h1>Blog here</h1>
    </div>
  )
}
