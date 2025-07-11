'use client'
import React,{useState,useEffect} from 'react'
import axios from 'axios'

export default function List() {
const[feedbacks ,setFeedbacks]= useState([])
let counter = 1
    
    const getFeedbacks = async() =>{
 await axios.get('/api/feedback?type=getFeedbacks')
      .then((res) => {setFeedbacks(res.data.feedbacks)
       
      })
      .catch((err) => console.error('Failed to fetch apps:', err));
 }

     const updateFeedbacks = async(id) =>{
await axios.patch(`/api/feedback/${id}?type=updateFeedabackStatus`)
      .then((res) =>  {getFeedbacks() 
       alert('Status Updated')
      })
      .catch((err) => console.error('Failed to fetch apps:', err));
 }

 useEffect(()=>{
getFeedbacks()
 },[])
  return (
    <div>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 ">
  <table className="table">
   
    <thead className='bg-black text-white'>
      <tr>
        <th></th>
        <th>App</th>
        <th>Feedback</th>
        <th>User</th>
        <th>status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
     
      {
        feedbacks.map((feed)=>(
             <tr key={feed._id}>
        <th>{counter++}</th>
        <td>{feed.appId.name}</td>
        <td>{feed.feedback}</td>
        <td>{feed.userId.name}</td>
         <td>{feed.status}</td>
         <td>{<button className="btn bg-blue-950 text-white" onClick={()=>updateFeedbacks(feed._id)}
         disabled={ feed.status === 'Done'}
         >Done</button>}</td>
      </tr>
        ))
      }
     
   
   
    </tbody>
  </table>
</div>
    </div>
  )
}
