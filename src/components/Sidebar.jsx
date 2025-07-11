import Dashboard from '@/app/dashboard/page'
import Link from 'next/link'
import React from 'react'

export default function Sidebar() {
  return (
    <>
      
      <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-between">
    <Dashboard></Dashboard>
    <label htmlFor="my-drawer-2" className="btn btn-info drawer-button lg:hidden">
      <svg
  xmlns="http://www.w3.org/2000/svg"
  className="w-6 h-6"
  fill="none"
  viewBox="0 0 24 24"
  stroke="white"
  strokeWidth={2}
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M4 6h16M4 12h16M4 18h16"
  />
</svg>

    </label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>

    <h1 className=' bg-blue-950  text-2xl font-medium text-white  w-70 p-4'>Feedback System</h1>
    <ul className="menu bg-blue-950  text-white min-h-full w-70 p-4 ">
      {/* Sidebar content here */}
      <li className='hover:bg-white hover:text-blue-950 rounded'><Link href={'/dashboard'}>Dashboard</Link></li>
      <li className='hover:bg-white hover:text-blue-950 rounded'><Link href={'/'}>Feedbacks</Link></li>
    </ul>
  </div>
</div>
    </>
  )
}
