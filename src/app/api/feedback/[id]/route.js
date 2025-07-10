import appModel from "@/model/apps";
import userModel from "@/model/user";
import feedbackModel from "@/model/feedback";
import { NextResponse } from "next/server";

export async function PATCH(req,{params}) {
    try {


        const{ searchParams} = new URL(req.url)
        const type = searchParams.get('type')

        if (type === 'updateFeedabackStatus'){
            const {id} =  params
            const updateFeedaback = await feedbackModel.findByIdAndUpdate(id,{
            status:'Done'
            },{new:true})

            return NextResponse.json({message:'Status Updated'})
        }

        return NextResponse.json({message:'Invalid Type'}, {status:400})
        
    } catch (error) {
        console.log(error.message)
        return NextResponse.json({messgae:'Internal Server Error'})
    }
}