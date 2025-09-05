import { NextResponse } from "next/server";
import { jwtVerify } from "jose";
 

export async function middleware(req){
  const isLoggedIn = true
//   if(!isLoggedIn && req.nextUrl.pathname !== '/login'){
//     return NextResponse.redirect(new URL('/login',req.url))
//   }


const token =  req.cookies.get('token')?.value
 console.log('token',token)
  if (!token) {
    if (req.nextUrl.pathname === "/login") {
      return NextResponse.next();
    }
    console.log('no token found')
   return NextResponse.redirect(new URL('/login',req.url))
 
  }

  try {
    if(token){ 
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);
    console.log('payload',payload)

  if (payload.role === "admin" && req.nextUrl.pathname === "/login") {
      return NextResponse.redirect(new URL("/admin", req.url));
    }

    if (payload.role === "user" && req.nextUrl.pathname === "/login") {
      return NextResponse.redirect(new URL("/chatbot", req.url));
    }

   const res = NextResponse.next();
      res.cookies.set("LoggedInUser", JSON.stringify(payload), { httpOnly: false });
      
      return res;

}
   
  } catch (err) {
     console.log('Invalid token')
       return NextResponse.redirect(new URL('/login',req.url))
  }
    //  return NextResponse.redirect(new URL('/login',req.url))
}
export const config = {
    matcher:["/login",'/admin/:path*', '/chatbot/:path*']
}
