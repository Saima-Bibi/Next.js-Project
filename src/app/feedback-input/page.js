'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFeedbacks } from '@/app/reduxToolkit/slice'
import { fetchApps } from '@/app/reduxToolkit/appSlice'

export default function Feedback() {


  const apps = useSelector(state => state?.apps?.data)
  console.log('APi', apps)
  const load = useSelector(state => state?.apps?.loading)
  const dispatch = useDispatch()
  // const [apps, setApp] = useState([])
  const [data, setData] = useState({
    appId: '',
    feedback: '',
    submittedBy: ''
  })

  const router = useRouter()

  const getData = async () => {
    axios.get('/api/feedback?type=getApps')
      .then((res) => setApp(res.data.appData))
      .catch((err) => console.error('Failed to fetch apps:', err));
  }

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    }
    )
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (!data.appId || !data.feedback) {
        // alert("Please select an app and write feedback.");

        toast.error('Please select an app and write feedback')

        return;
      }
      const res = await axios.post('/api/feedback?type=giveFeedback&userId=0112&userName=g1_plain', data);

      toast.success(res?.data?.message)
      setData({
        appId: '',
        feedback: '',
        submittedBy: ''
      });
    
      dispatch(fetchFeedbacks())
    } catch (error) {
      console.error('Failed to submit feedback', error)
    }

  }

  useEffect(() => {
    dispatch(fetchApps())
    
  }, [dispatch])



  return (
    <>
   
     

    
        <div className="">
          <h3 className="font-bold text-lg text-center  ">Hello!</h3>
          <p className="py-4 text-center">Give your feedback</p>

          
          <div className='flex flex-col items-center '>

            <select className="select  "  name='appId' value={data.appId} onChange={handleChange}>
              <option value="" disabled>
                Pick an app
              </option>
              {load ? (<option>Loading Apps...</option>) : (
                apps?.map((app) => (
                  <option key={app._id} value={app._id}>{app.name}</option>)
                ))}

            </select>

       <br></br>

          <input type="text" placeholder="Type feedback here" className="input" name='feedback' value={data.feedback} onChange={handleChange} /><br></br>
          <input type="text" placeholder="Type name here" className="input" name='submittedBy' value={data.submittedBy} onChange={handleChange} />
          <div className="modal-action">
          
            <button className="btn bg-blue-950 text-white" onClick={handleSubmit}>Submit</button>
          </div>
          </div>
        </div>
    
    </>
  )
}
