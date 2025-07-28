'use client'
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFeedbacks } from '@/app/reduxToolkit/slice'

export default function List() {

  const data = useSelector(state=> state?.feedbacks?.data)
  const load = useSelector(state=> state?.feedbacks?.loading)
  const dispatch = useDispatch()
const[allFeedbacks ,setAllFeedbacks]= useState([])  
const[feedbacks ,setFeedbacks]= useState([])
const[filterType,setFilterType] = useState('')
let counter = 1
    

console.log('data', data)
    const getFeedbacks = async() =>{
 await axios.get('/api/feedback?type=getFeedbacks')
      .then((res) => {
        setAllFeedbacks(res.data.feedbacks)
        setFeedbacks(res.data.feedbacks)
       
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

//  useEffect(()=>{
// getFeedbacks()
//  },[])

useEffect(() => {
    dispatch(fetchFeedbacks());
    if(data){
       setAllFeedbacks(data)
        setFeedbacks(data)
    }
  }, [dispatch]);

  useEffect(() => {
  
    if(data){
       setAllFeedbacks(data)
        setFeedbacks(data)
    }
  }, [data]);

const applyFilter = (status) => {
  setFilterType(status);
  const filtered = allFeedbacks.filter(feed => feed.status === status);
  console.log('allFeedbacks',allFeedbacks)
  setFeedbacks(filtered);
};

const reset = ()=>{
  setFilterType(null)
  setFeedbacks(allFeedbacks)
}


 
  return (
    <div>
      <div className=' flex justify-end pr-4 mt-5 mb-5'>
        <div className='space-x-1'>
         <button className={`btn ${filterType === 'Initiated' ? 'bg-blue-950 text-white text-bold' : 'border-blue-950 bg-white text-blue-950'}`} onClick={()=>applyFilter('Initiated')}>Initiated</button>
      <button  className={`btn ${filterType === 'Done' ? 'bg-blue-950 text-white text-bold' : 'border-blue-950 bg-white text-blue-950'}`} onClick={()=>applyFilter('Done')}>Done</button>
             <button  className={`btn ${filterType === null ? 'bg-blue-950 text-white text-bold' : 'border-blue-950 bg-white text-blue-950'}`} onClick={reset}>Reset</button>

       </div>
      
      </div>
     
      <div className="overflow-y-auto  h-120  border-none  bg-base-100 ">
    { load ? (<p>Loading...</p>):  ( <table className="table table-auto h-60 table-md w-[98%] ml-1" >
   
    <thead className='bg-black text-white text-sm font-normal rounded-md'>
      <tr>
        <th></th>
        <th>App</th>
        <th>Feedback</th>
        <th>Username</th>
         <th>Submitted By</th>
        <th>Status</th>
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
        <td>{feed.userName}</td>
        <td>{feed.submittedBy}</td>
         <td>{feed.status}</td>
         <td>{<button className="px-3 py-1 rounded-md bg-blue-950 text-white" onClick={()=>updateFeedbacks(feed._id)}
         disabled={ feed.status === 'Done'}
         >Done</button>}</td>
      </tr>
        ))
      }
     
   
   
    </tbody>
  </table>)}  
 
</div>
    </div>
  )
}
