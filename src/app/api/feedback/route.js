import dbConnection from "@/lib/db_connection";
import appModel from "@/model/apps";
import userModel from "@/model/user";
import feedbackModel from "@/model/feedback";
import { NextResponse } from "next/server";


export async function GET(req){
    try {
        await dbConnection()

        const {searchParams} = new URL(req.url)
        
        const type = searchParams.get('type')
       

        if (type === 'getApps'){
            const appData = await appModel.find();
    return NextResponse.json({message:'Fetching App data', appData})
        }

        if(type === 'getFeedbacks'){
            const feedbacks = await feedbackModel.find().populate([
               { path:'appId', select:'name'},
               {path:'userId', select:'name'}

            ])
            console.log('feedbacks',feedbacks)
            return NextResponse.json({message:'Fetching Feedback data', feedbacks})
        }

        if(type === 'getStatusCount'){
           const status =  await feedbackModel.aggregate([
            {
                $group: {
                    _id:'$status',
                    count: {$sum:1}
                }
            },{
                $project:{
                    name: '$_id',
                    count:1
                }
            }
           ])

             console.log('status',status)
            return NextResponse.json({message:'Fetching status data', status})
        }


        if(type === 'getFeedCountPerApp'){
            const feed = await feedbackModel.aggregate([
                {
                    $group:{
                        _id:'$appId',
                        count: {$sum:1}
                    }
                },
                {
                    $lookup:{
                        from: 'apps',
                        localField:'_id',
                        foreignField:'_id',
                        as:'app'
                    }
                },
                {$unwind:'$app'}, // will give obj insted of array

                {
                    $project:{
                        
                        name:'$app.name',
                        count:1
                    }
                }
            ])
             console.log('feed here',feed)
            return NextResponse.json({message:'Getting Count Feedback Per App', feed})
            
        }

    return NextResponse.json({message:'Invalid Type'}, {status:400})

    } catch (error) {
        console.log(error.message)
         return NextResponse.json({message:'Internal Server Error'}, {status: 500})
    }
}

export async function POST(req){
    try {
        const {appId,feedback,userId} =  await req.json()

        
        const newFeedback = new feedbackModel({appId,feedback,userId})
        await newFeedback.save()
         console.log('log here',appId,feedback,userId)
         
      return NextResponse.json({message:'Feedback received',newFeedback})
        
    } catch (error) {
         console.log(error.message)
         return NextResponse.json({message:'Internal Server Error'}, {status: 500})
    }
}

