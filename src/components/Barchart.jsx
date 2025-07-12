"use client"

import axios from 'axios';
import React, { useState , useEffect} from 'react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts'

export default function Barchart() {

const[data, setData] = useState([])

   const getData = async() =>{
   axios.get('/api/feedback?type=getFeedCountPerApp')
        .then((res) => setData(res.data.feed))
        .catch((err) => console.error('Failed to fetch count:', err));
   }

   useEffect(()=>{
    getData()
   },[])

// const data = [
//   {
//     name: 'WhatsApp',
//     count: 10,
//   },
//   {
//     name: 'Facebook',
//     count: 5,
//   },
//   {
//     name: 'LinkedIn',
//     count: 8,
//   },
//   {
//     name: 'Instagram',
//     count: 6,
//   },
//   {
//     name: 'Snapchat',
//     count: 3,
//   },
//    {
//     name: 'Instagram',
//     count: 6,
//   },
//   {
//     name: 'Snapchat',
//     count: 3,
//   },
// ];


  return (
    <div className="bg-white shadow-md rounded-xl p-4 w-full max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-4 text-center">Feedback Count Per App</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name"  className='text-sm'/>
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#8884d8" name="Feedback Count"  barSize={30}/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
