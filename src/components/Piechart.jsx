'use client'
import axios from 'axios';
import React ,{useState,useEffect} from 'react'
import { Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export default function Piechart() {
 const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D'];
// const data = [
//   { name: 'Initiated', value: 400 },
//   { name: 'Done', value: 300 },

// ];


const[data, setData] = useState([])

   const getData = async() =>{
   axios.get('/api/feedback?type=getStatusCount')
        .then((res) => setData(res.data.status))
        .catch((err) => console.error('Failed to fetch count:', err));
   }

   useEffect(()=>{
    getData()
   },[])



const hasData = Array.isArray(data) && data.length > 0;
  

if (!hasData) {
  return (
    <div style={{ 
      width: '100%', 
      height: 250, 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      border: '1px dashed #ccc',
      borderRadius: '8px'
    }}>
      No data available
    </div>
  );
}

  return (
    <div className='bg-white shadow-md rounded-xl p-4 w-full max-w-xl mx-auto'>
         <h2 className="text-xl font-bold  text-center">Status Distribution</h2>
       <ResponsiveContainer width="100%" height={315}>
        <PieChart className='pr-20'>
          <Pie
            data={data}
            cx="55%"
            cy="55%"
            labelLine={true}
            outerRadius={90}
            fill="#8884d8"
            dataKey="count"
            nameKey="name"
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value, name) => [`${value}`, name]} />
          <Legend formatter={(value) => <span style={{ fontSize: '10px' }}>{value}</span>} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
