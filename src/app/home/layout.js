'use client'
import { usePathname } from "next/navigation"
import Link from 'next/link'
import Feedback from "@/components/Feedback"

export default function Layout({children}){
    const pathName = usePathname()
    return (
<>
{/* { pathName !== '/home/notification' ? <h1>common layout for home and its children bsed on condition</h1>: null} */}

    <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content  ">
    {/* <Dashboard></Dashboard> */}
    {children}
    <label htmlFor="my-drawer-2" className="btn bg-blue-950 drawer-button lg:hidden">
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
     <li className={pathName === '/home/dashboard' ? 'bg-white text-blue-950 rounded font-medium' : ''}>
              <Link href="/home/dashboard">Dashboard</Link>
            </li>
            <li className={pathName === '/home/feedbacks' ? 'bg-white text-blue-950 rounded font-medium' : ''}>
              <Link href="/home/feedbacks">Feedbacks</Link>
            </li>
    </ul>
  </div>
</div>
<Feedback></Feedback>
</>
    )
}