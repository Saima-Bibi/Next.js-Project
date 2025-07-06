import React,{useEffect, useState} from 'react'
import Link from 'next/link'
import {useRouter} from 'next/navigation'
import axios from 'axios'

export default function Feedback() {
 const[name,setName]= useState('Salma')
 const[apps,setApp]= useState([])
 const router = useRouter()

 const getData = async() =>{
 axios.get('/api/feedback')
      .then((res) => setApp(res.data.data))
      .catch((err) => console.error('Failed to fetch apps:', err));
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
    <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>Feedback</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg text-center">Hello!</h3>
    <p className="py-4 text-center">Give your feedback</p>

    <fieldset className="mb-2">
 
  
    <select defaultValue="Pick an app" className="select ml-16">
    <option disabled={true}>Pick an app</option>
    {apps.map((app)=>(
      <option key={app._id} value={app.name}>{app.name}</option>
    ))}
    
  </select>

</fieldset>

    <input type="text" placeholder="Type here" className="input ml-16" />
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
      <button className="btn">Submit</button>
    </div>
  </div>
</dialog>
    </>
  )
}
