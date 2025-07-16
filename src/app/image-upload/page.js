'use client'
import React,{useState,useEffect} from 'react'
import {toast} from 'react-hot-toast'
import axios from 'axios'

export default function ImageUpload() {

    const[file,setFile]= useState(null)
    const[images,setImages]= useState([])
    
    const handleSubmit = async (e)=>{
    e.preventDefault()
if(!file){
    toast.error('select file first')
}
 const data = new FormData()
 data.append('file',file)

 try {
     const res = await axios.post('/api/upload-image',data)
      console.log('res',res)
    toast.success(res.data.message)
 } catch (error) {
    console.log(error.message)
 }

    }

const getImages = async()=>{
    try {
        const res = await axios.get('/api/upload-image')
        setImages(res.data.images)
         toast.success(res.data.message)
        console.log(res,res)
    } catch (error) {
         console.log(error.message)
    }
}
useEffect(()=>{
getImages()
},[])

  return (
    <div>
        <form onSubmit={handleSubmit} className='flex items-center justify-center w-full mt-10 space-x-5'>
      <input type='file' name='file' className='input' onChange={(e)=> setFile(e.target.files?.[0])}/> 
      <button className='btn btn-primary p-4'>Submit</button>
      </form>

      <h1>Fetching Images...</h1>
      { images.map((image)=>(

        <div key={image._id}>

         <img src={`data:${image.contentType};base64, ${Buffer.from(image.data).toString('base64')}`}  alt={image.name} className='w-100 h-100'/>
         <p>{image.name}</p>
      </div>
      ))
     }
     
    </div>
  )
}
