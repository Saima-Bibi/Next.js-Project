import dbConnection from "@/lib/db_connection"
import userModel from "@/model/user"
import { NextResponse } from "next/server"

export async function POST(req){
    dbConnection()

const {searchParams} = new URL(req.url)
const type = searchParams.get('type')

if(type === 'register'){
    const{ name, password} = await req.json()

    const newUser = new userModel({name,password})
    newUser.save()
    return NextResponse.json({message:'new user created successfully', newUser})
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