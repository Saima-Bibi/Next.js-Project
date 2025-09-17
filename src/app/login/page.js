
'use client'
import React,{useState} from 'react';
import Image from 'next/image'
import img from '/public/next.svg'
import axios from 'axios';
import toast from 'react-hot-toast';


function Login() {
  const [data,setData] = useState({
    name:'',
    password:'',
    
  })


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
        const res = await axios.post('/api/chatbot?type=login', data);
console.log('res',res)
        if(res){
        
        toast.success(res?.data?.message)
        setData({
          name: '',
          password: '',
        
         
        });
        window.location.href = "/login";

        }
  
        
     
        
      } catch (error) {
        console.error('Failed to login', error)
      }
  
    }
  
  return (
    <div>
      {/* <h1>Login Page</h1> */}
      {/* <title>Login Page</title> */}
      {/* <Image src={img} height={400} width={400} alt='image'/>
      <Image src='https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?_gl=1*8a07on*_ga*MTUxMDQ3MTcxNS4xNzQ1Njc4NTg0*_ga_8JE65Q40S6*czE3NTE5NTg5NDQkbzIkZzEkdDE3NTE5NTk2MjkkajI5JGwwJGgw' height={400} width={400} alt='image'/>
        */}

   <div className="h-screen w-full flex justify-center items-center">
  <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg">
    <h3 className="font-bold text-lg text-center mb-4">Welcome Back!</h3>

    <label className="font-bold">Name</label>
    <input
      type="text"
      placeholder="Type name here"
      className="input w-full mb-3"
      name="name"
      value={data.name}
      onChange={handleChange}
    />

    <label className="font-bold">Password</label>
    <input
      type="password"
      placeholder="Type password here"
      className="input w-full mb-5"
      name="password"
      value={data.password}
      onChange={handleChange}
    />

    <div className="flex justify-center">
      <button
        className="btn bg-blue-950 text-white w-full"
        onClick={handleSubmit}
      >
        Login
      </button>
    </div>
  </div>
</div>


    </div>
  )
}

export default Login

// export  function generateMetadata (){
// return{
//   title:'Login Page',
//   description:'Login page will authenticate the user'
// }
// }
