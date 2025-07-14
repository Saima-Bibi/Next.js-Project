'use client'
import { usePathname } from "next/navigation"
import Link from 'next/link'
import Feedback from "@/components/Feedback"

export default function Layout({ children }) {
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

             

              <Link href="/home/dashboard">  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
              </svg>Dashboard</Link>
            </li>
            <li className={pathName === '/home/feedbacks' ? 'bg-white text-blue-950 rounded font-medium' : ''}>
              <Link href="/home/feedbacks"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
</svg>
Feedbacks</Link>
            </li>
          </ul>
        </div>
      </div>
      <Feedback></Feedback>
    </>
  )
}