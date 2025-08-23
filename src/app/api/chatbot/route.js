import dbConnection from "@/lib/db_connection"
import userModel from "@/model/user"
import { NextResponse } from "next/server"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export async function POST(req){
    dbConnection()

const {searchParams} = new URL(req.url)
const type = searchParams.get('type')

if(type === 'register'){
    const{ name, password,role} = await req.json()

    const hashedPassword = await bcrypt.hash(password,10)

    const newUser = new userModel({name, password:hashedPassword, role})
    newUser.save()
    return NextResponse.json({message:'new user created successfully', newUser})
}

if(type === 'login'){
      const{ name, password} = await req.json()
    
    const user = await userModel.findOne({name });
    if (!user) {
        return NextResponse.json({message:'new user created successfully'  },{ status: 404 })
    
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({message:'Invalid credentials'},{ status: 400 })
      
    }

    
    const token = jwt.sign(
      { userId: user._id, name: user.name, role: user.role },
      process.env.JWT_SECRET,  
      { expiresIn: "10d" }
    );
      const response= NextResponse.json({ message: 'Logged in successfully',token })
      response.cookies.set('token',token,{httpOnly:true,secure:true,sameSite:'strict',maxAge:10*24*60*60})
      return response
}


   return NextResponse.json({ message: 'Invalid Type' }, { status: 400 })

}

export async function GET(req){
    dbConnection()
    const {searchParams} = new URL(req.url)
    const type = searchParams.get('type')

    if(type === 'getUsers'){
  const users = await userModel.find()
  return NextResponse.json({message:'Fetching users', users})
    }

      return NextResponse.json({ message: 'Invalid Type' }, { status: 400 })
}