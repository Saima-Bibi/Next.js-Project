import { NextResponse } from "next/server";

export  function middleware(req){
  const isLoggedIn = true
//   if(!isLoggedIn && req.nextUrl.pathname !== '/login'){
//     return NextResponse.redirect(new URL('/login',req.url))
//   }


const token = localStorage.getItem("token");

  if (!token) {
    NextResponse.redirect(new URL('/login',req.url))
    return NextResponse.json({ error: "No token provided" }, { status: 401 });
  }

  try {
      localStorage.setItem("token", token);
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

  localStorage.setItem("decoded token", decoded);
   
  } catch (err) {
    return NextResponse.json({ error: "Invalid token" }, { status: 403 });
  }
    //  return NextResponse.redirect(new URL('/login',req.url))
}
export const config = {
    matcher:'/ssg:path*'
}
