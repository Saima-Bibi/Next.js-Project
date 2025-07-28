'use client'
import { fetchApps } from '@/app/reduxToolkit/appSlice'
import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'

export default function App() {
  const dispatch = useDispatch()
    const[data,setData] = useState({
        appName:'',
        appType:''
    })

const handleSubmit= async(e)=>{
 e.preventDefault()
  if(!data.appName || !data.appType){
   toast.error('App name and its type is required')
   return;
  }
  
  try {

const response = await axios.post('/api/feedback?type=giveApp',data)
toast.success(response?.data?.message)

setData({
    appName:'',
    appType:''
})
  document.getElementById('my_modal_2').close()
  dispatch(fetchApps())
    
  } catch (error) {
     console.error('Failed to submit feedback',error)
  }
  
 
}

    const handleChange =(e)=>{
    setData({
        ...data,
        [e.target.name]:e.target.value
    })
    }
  return (
    <>
      
<button className="btn rounded-xl bg-blue-950  fixed bottom-6 right-22 z-50 drop-shadow-md drop-shadow-blue-800 animate-bounce" onClick={()=>document.getElementById('my_modal_2').showModal()}>
    
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" height='24' width='24' fill='white'><path d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM296 408L296 344L232 344C218.7 344 208 333.3 208 320C208 306.7 218.7 296 232 296L296 296L296 232C296 218.7 306.7 208 320 208C333.3 208 344 218.7 344 232L344 296L408 296C421.3 296 432 306.7 432 320C432 333.3 421.3 344 408 344L344 344L344 408C344 421.3 333.3 432 320 432C306.7 432 296 421.3 296 408z"/></svg>

    </button>
<dialog id="my_modal_2" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg text-center">Hello!</h3>
    <p className="py-4 text-center">Add app for feedback</p>

  <input type="text" placeholder="App name " className="input ml-16" name='appName' value={data.appName} onChange={handleChange}/>
     <input type="text" placeholder="App type" className="input ml-16 mt-1" name='appType' value={data.appType}   onChange={handleChange}/>

    <div className="modal-action">
      <form method="dialog">
       
        <button className="btn">Close</button>
       
      </form>
         <button className="btn bg-blue-950 text-white" onClick={handleSubmit}>Add</button>
    </div>
  </div>
</dialog>
    </>
  )
}
