import React from 'react'
import getData from '../../../services/getdata'
import Link from 'next/link'

async function Ssg() {
    const data = getData()
    const users = await data

  return (
    <div>
      <h1> Static Site Generation Concept</h1>

    {
        users.map((user,i)=>(
<h3 key={i}>
    <Link href={`/ssg/${user.id}`}>{user.name}</Link>
</h3>
        ))
    }
    </div>
  )
}

export default Ssg
