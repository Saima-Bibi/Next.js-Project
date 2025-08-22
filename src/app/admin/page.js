'use client'
import axios from 'axios'
import React,{useState, useEffect} from 'react'
import toast from 'react-hot-toast'
import { useSelector, useDispatch } from "react-redux";
import {fetchUsers} from '@/app/reduxToolkit/userSlice'


export default function Admin() {

const [data,setData] = useState({
  name:'',
  password:'',
  role:''
})
let counter = 1


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
        role:''
       
      });
    document.getElementById('my_modal_5').close()
    dispatch(fetchUsers())
      
    } catch (error) {
      console.error('Failed to submit feedback', error)
    }

  }

  return (
    <>
  <div className = ' flex flex-row justify-end'>
<button className="btn bg-blue-950 
 text-white m-3" onClick={()=>document.getElementById('my_modal_5').showModal()}>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" height={15} width={15} fill='white'><path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>
  Create User</button>
</div>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box ">
    <h3 className="font-bold text-lg text-center">Register new user!</h3><br></br>
    <label className='font-bold'>Name</label> <br></br> 
   <input type="text" placeholder="Type name here" className="input w-full" name='name'  value={data.name} onChange={handleChange}/> <br></br> <br></br>
     <label className='font-bold'>Password</label> <br></br>
   <input type="password" placeholder="Type password here" className="input w-full" name='password' value={data.password} onChange={handleChange}/> <br></br> <br></br>
  <label className='font-bold'>Role</label> <br></br>
<select
  name="role"
  className="select w-full"
  value={data.role || ""}   
  onChange={handleChange}
>
  <option value="" disabled>
    Select role
  </option>
  <option value="admin">Admin</option>
  <option value="user">User</option>
</select>
<br></br>


    <div className="modal-action flex flex-col items-center justify-center">
       <button className="btn bg-blue-950 text-white w-full"  onClick={handleSubmit}>Register</button>
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
       <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
    </div>
  </div>
</dialog>


<div className="overflow-x-auto">
  <table className="table w-[50%] ml-5">
    {/* head */}
    <thead className=''>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Role</th>
       
      </tr>
    </thead>
    <tbody>
     { users?.map(item =>(
      <tr key={item._id}>
        <th>{counter++}</th>
        <td>{item.name}</td>
        <td>{item.role}</td>
       
      </tr>
     ))
      }
      
    
    </tbody>
  </table>
</div>



    </>
  )
}
