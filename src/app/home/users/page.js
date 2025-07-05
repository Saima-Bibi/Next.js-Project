import Link from 'next/link'
import React from 'react'

function Users() {
  return (
    <div>
      <ul>
        <li>
            <Link href={'/home/users/Sara'}>Sara</Link>
        </li>
        <li>
            <Link href={'/home/users/Amna'}>Amna</Link>
        </li>
        <li>
            <Link href={'/home/users/Iqra'}>Iqra</Link>
        </li>
      </ul>
    </div>
  )
}

export default Users
