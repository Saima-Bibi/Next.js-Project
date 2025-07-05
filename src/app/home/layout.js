'use client'
import { usePathname } from "next/navigation"

export default function Layout({children}){
    const pathName = usePathname()
    return (
<>
{ pathName !== '/home/notification' ? <h1>common layout for home and its children bsed on condition</h1>: null}
{children}
</>
    )
}