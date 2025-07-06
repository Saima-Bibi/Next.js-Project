import dbConnection from "@/lib/db_connection";
import appModel from "@/model/apps";
import { NextResponse } from "next/server";


export async function GET(req){
    try {
        await dbConnection()
    const appData = await appModel.find();
    return NextResponse.json({message:'demo api is working', appData})

    } catch (error) {
        console.log(error.message)
         return NextResponse.json({message:'Internal Server Error'}, {status: 500})
    }
}