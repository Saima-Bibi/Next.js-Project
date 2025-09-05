import dbConnection from "@/lib/db_connection"
import conversationModel from "@/model/conversation"
import { NextResponse } from "next/server"


export async function GET(req,{params}){

    const {searchParams} = new URL(req.url)
    const type = searchParams.get('type')

if(type === 'getConversations'){

    dbConnection()
    const {id} = await params
    const conversations = await conversationModel.find({userId:id}).populate({
        path:'messages',
        select:'sender content createdAt'
    })

    if(!conversations){
        return NextResponse.json({message:'No conversation found'}, {status:404})
    }
    
  return NextResponse.json({message:'getting all conversation', conversations });
}
 return NextResponse.json({ message: 'Invalid Type' }, { status: 400 })
}