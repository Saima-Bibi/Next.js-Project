'use client'
import React,{useEffect, useState} from 'react'
import Link from 'next/link'
import {useRouter} from 'next/navigation'
import axios from 'axios'

export default function Feedback() {
 const[name,setName]= useState('Salma')
 const[apps,setApp]= useState([])
 const[data,setData]= useState({
  appId:'',
  feedback:'',
  userId:'686a82245315f301a5d276c6'
 })
 const router = useRouter()

 const getData = async() =>{
 axios.get('/api/feedback?type=getApps')
      .then((res) => setApp(res.data.appData))
      .catch((err) => console.error('Failed to fetch apps:', err));
 }

 const handleChange= (e)=>{
   setData({
    ...data,
   [e.target.name]: e.target.value}
   )
 }

 const handleSubmit=async(e)=>{
  e.preventDefault()
  try {
     if (!data.appId || !data.feedback) {
    alert("Please select an app and write feedback.");
    return;
  }
  const res = await axios.post('/api/feedback', data);
    alert(res?.data?.message);
   setData({
      appId: '',
      feedback: '',
      userId: '686a82245315f301a5d276c6'
    });
    
  } catch (error) {
    console.error('Failed to submit feedback',error)
  }

 }

 useEffect(()=>{
  getData()
 },[])

  
  return (
    <>
      {/* <p>{name} is practicing for next.js</p>
      <button onClick={ ()=> { setName('Saima')}}>click me</button>
      <Link href='/home'>Go to home</Link>
      <button onClick={ ()=>{router.push('/home')}}>Go Home</button>
     <h1 className="text-5xl font-bold underline">
      Hello world!
    </h1> */}
 <button
  className=" btn  rounded-xl bg-blue-950  fixed bottom-6 right-6 z-50 shadow-lg animate-bounce"
  onClick={() => document.getElementById('my_modal_1').showModal()}
>
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square-plus-icon lucide-message-square-plus"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M12 7v6"/><path d="M9 10h6"/></svg>


</button>

<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg text-center">Hello!</h3>
    <p className="py-4 text-center">Give your feedback</p>

    <fieldset className="mb-2">
 
  
    <select  className="select ml-16" name='appId' value={data.appId} onChange={handleChange}>
     <option value="" disabled>
    Pick an app
  </option>
    {apps.map((app)=>(
      <option key={app._id} value={app._id}>{app.name}</option>
    ))}
    
  </select>

</fieldset>

    <input type="text" placeholder="Type here" className="input ml-16" name='feedback' value={data.feedback} onChange={handleChange}/>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
      <button className="btn bg-blue-950 text-white" onClick={handleSubmit}>Submit</button>
    </div>
  </div>
</dialog>
    </>
  )
}
