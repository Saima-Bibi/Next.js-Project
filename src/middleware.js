import { NextResponse } from "next/server";

export  function middleware(req){
  const isLoggedIn = true
//   if(!isLoggedIn && req.nextUrl.pathname !== '/login'){
//     return NextResponse.redirect(new URL('/login',req.url))
//   }
     return NextResponse.redirect(new URL('/login',req.url))
}
export const config = {
    matcher:'/ssg:path*'
}
