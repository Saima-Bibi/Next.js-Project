import UploadBox from '@/components/uploadBox'
import React from 'react'

export default function page() {
    const languages = [
        {
        id:1,
    content:'Dari'},
    {
        id:2,
    content:'Pashto'},
    {
        id:3,
    content:'Urdu'},
    {
        id:4,
    content:'Hindi'},
    {
        id:5,
    content:'Arabic'},
    {
        id:6,
    content:'Other'}]
  return (
    <>
    <div  className="relative bg-[url('/eye-cyber.jpg')] h-screen bg-cover">
        <div className=' flex flex-row justify-center w-full   '>
           
{languages.map((lang)=>(
 <div  key={lang.id}  className='bg-amber-500 p-2 mt-5  '>
   <button className='bg-yellow-950 py-1 px-4  text-xs lg:text-sm  text-white font-semibold'>{lang.content}</button>
</div>
))}
 </div>

 <div className='flex flex-row'>

  <div className='flex flex-col  gap-y-2 rounded-xl absolute left-[5%] lg:left-[25%] top-[45%] transform  items-center'>
   <button className='bg-yellow-100  rounded-md py-1 px-3 text-sm text-black font-semibold'>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-up-icon lucide-file-up"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M12 12v6"/><path d="m15 15-3-3-3 3"/></svg>
   </button>
     <button className='bg-yellow-100  rounded-md py-1 px-3 text-sm text-black font-semibold'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-folder-up-icon lucide-folder-up"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/><path d="M12 10v6"/><path d="m9 13 3-3 3 3"/></svg>
     </button>
       <button className='bg-yellow-100 rounded-md py-1 px-3 text-sm text-black font-semibold'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-volume-icon lucide-volume"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"/></svg>
       </button>

</div>
        {/* Circle */}  
     <div className="absolute inset-0 flex items-center justify-center">
  <div className=" min-w-85 min-h-85  lg:h-125 lg:w-125 mt-8 rounded-full bg-amber-500 opacity-70 border-4 border-red-700">
    
  </div>
   <p className='   text-black  absolute top-[52%] lg:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-4  font-bold'>Select Target Language</p>

   
</div>

<div className='flex flex-col gap-y-2  absolute left-[87%] top-[45%]  sm:left-[77%] lg:left-[71%]  '>
   <button className='bg-yellow-100 rounded-md py-1 px-3 text-sm text-black font-semibold'>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-up-icon lucide-file-up"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M12 12v6"/><path d="m15 15-3-3-3 3"/></svg>
   </button>
     <button className='bg-yellow-100 rounded-md py-1 px-3 text-sm text-black font-semibold'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-folder-up-icon lucide-folder-up"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/><path d="M12 10v6"/><path d="m9 13 3-3 3 3"/></svg>
     </button>
       <button className='bg-yellow-100  rounded-md py-1 px-3 text-sm text-black font-semibold'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"strokeLinejoin="round" className="lucide lucide-volume-icon lucide-volume"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"/></svg>
       </button>

</div>
</div>

<div className='absolute left-1/2 top-[72%]    transform -translate-x-1/2  -translate-y-0'>
   <button className=' bg-cyan-400 py-1 px-8 lg:px-18 lg:py-2 text-white rounded-3xl text-xs lg:text-md font-bold'>Translate Now</button>

</div>

     <div className=' grid grid-flow-col grid-rows-2 absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-0 '>
           
{languages.map((lang)=>(
 <div  key={lang.id}  className=' p-2  '>
   <button className='bg-yellow-950 py-1 w-13 lg:w-20 text-xs lg:text-sm  text-white  font-semibold'>{lang.content}</button>
</div>
))}
 </div>

    <UploadBox></UploadBox>



<div  className='flex flex-col gap-y-4  absolute  justify-center left-[21%] lg:left-[33%] top-1/2 sm:left-[23%]'>
  <button className='bg-red-700 rounded-full p-1 lg:p-2'>

<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24" className='lg:h-8 lg:w-8 w-6 h-6'>
  <path d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/>
  <text x="7" y="17" fontSize="8" fill="black" fontFamily="Arial" fontWeight="bold">PDF</text>
</svg>

  </button>
   <button className='bg-red-700 rounded-full p-1 lg:p-2'>

<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24" className='lg:h-8 lg:w-8 w-6 h-6'>
  <path d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/>
  <text x="6" y="17" fontSize="8" fill="black" fontFamily="Arial" fontWeight="bold">W</text>
</svg>


  </button>
</div>

<div  className='flex flex-col  gap-y-4  absolute  justify-center left-[71%] lg:left-[63%] top-1/2 sm:left-[73%]'>
  <button className='bg-red-700 rounded-full p-1 lg:p-2'>

<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-x-icon lucide-file-x lg:h-8 lg:w-8 w-6 h-6"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="m14.5 12.5-5 5"/><path d="m9.5 12.5 5 5"/></svg>

  </button>
   <button className='bg-red-700 rounded-full p-1 lg:p-2'>

<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-image-icon lucide-image lg:h-8 lg:w-8 w-6 h-6 "><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>

  </button>
</div>
        
        <p className=' absolute text-white text-center w-full bottom-0 text-sm text-shadow-sm text-shadow-orange-300'> &copy;
 2025 Vision Tech 360. All Rights Reserved</p>

    </div>
    
    </>
  )
}
