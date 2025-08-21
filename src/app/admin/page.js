'use client'
import axios from 'axios'
import React,{useState, useEffect} from 'react'
import toast from 'react-hot-toast'
import { useSelector, useDispatch } from "react-redux";
import {fetchUsers} from '@/app/reduxToolkit/userSlice'


export default function Admin() {

const [data,setData] = useState({
  name:'',
  password:''
})


const users = useSelector((state) => state?.users?.data)
const dispatch = useDispatch()
console.log('users',users)

useEffect(() => {
  dispatch(fetchUsers());
}, []); 

const handleChange =(e)=>{
  setData({
    ...data,
    [e.target.name]:e.target.value
  })
}

const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (!data.name || !data.password) {
      

        toast.error('Please enter name and password')

        return;
      }
      const res = await axios.post('/api/chatbot?type=register', data);

      toast.success(res?.data?.message)
      setData({
        name: '',
        password: '',
       
      });
    document.getElementById('my_modal_5').close()
    dispatch(fetchUsers())
      
    } catch (error) {
      console.error('Failed to submit feedback', error)
    }

  }

  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn bg-blue-950 text-white m-3" onClick={()=>document.getElementById('my_modal_5').showModal()}>Create User</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box flex flex-col items-center">
    <h3 className="font-bold text-lg text-center">Register new user!</h3><br></br>
   <input type="text" placeholder="Type name here" className="input" name='name'  value={data.name} onChange={handleChange}/> <br></br>
   <input type="password" placeholder="Type password here" className="input" name='password' value={data.password} onChange={handleChange}/>
   
    <div className="modal-action">
       <button className="btn bg-blue-950 text-white"  onClick={handleSubmit}>Register</button>
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>


<div className="overflow-x-auto">
  <table className="table w-[50%] ml-5">
    {/* head */}
    <thead className='bg-black text-white'>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Password</th>
       
      </tr>
    </thead>
    <tbody>
     { users?.map(item =>(
      <tr key={item._id}>
        <th>1</th>
        <td>{item.name}</td>
        <td>{item.password}</td>
       
      </tr>
     ))
      }
      
    
    </tbody>
  </table>
</div>



    </>
  )
}
