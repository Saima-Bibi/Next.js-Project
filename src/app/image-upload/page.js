'use client'
import React,{useState} from 'react'
import {toast} from 'react-hot-toast'
import axios from 'axios'

export default function ImageUpload() {

    const[file,setFile]= useState(null)
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
    // toast.success(res.data.message)
 } catch (error) {
    console.log(error.message)
 }

    }
  return (
    <div>
        <form onSubmit={handleSubmit} className='flex items-center justify-center w-full mt-10 space-x-5'>
      <input type='file' name='file' className='input' onChange={(e)=> setFile(e.target.files?.[0])}/> 
      <button className='btn btn-primary p-4'>Submit</button>
      </form>
    </div>
  )
}
