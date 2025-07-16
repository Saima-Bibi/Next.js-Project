 import {NextResponse} from 'next/server'
 import {writeFile} from 'fs/promises'

 export async function POST(req){

    const data = await req.formData()
    const file =  data.get('file')

    if(!file){
return NextResponse.json({message:'file not found'})
    }

    const bufferData =  await file.arrayBuffer() // reads the file's raw binary data from the uploaded file
    const buffer = Buffer.from(bufferData) //Converts the ArrayBuffer into a Node.js Buffer.
    const path = `./public/uploads/${file.name}`
try {
    
await writeFile(path,buffer)

return NextResponse.json({message:'file uploaded successfully'})
    
} catch (error) {
    return NextResponse.json({message:'Internal Server error'},{status:500})
}
    
 }