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
   <button className='bg-yellow-950 py-1 px-6 text-sm text-white font-semibold'>{lang.content}</button>
</div>
))}
 </div>
        {/* Circle */}  
     <div className="absolute inset-0 flex items-center justify-center">
  <div className="h-125 w-125 mt-8 rounded-full bg-amber-500 opacity-70 border-4 border-red-700">
    
  </div>
   <p className='  py-1 px-18 text-black  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-6  font-bold'>Select Target Language</p>





    <button className=' bg-cyan-400 py-1 px-18 text-white rounded-3xl absolute bottom-24 sm:botton-8  font-bold'>Translate Now</button>
</div>



     <div className=' grid grid-flow-col grid-rows-2 absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-0 '>
           
{languages.map((lang)=>(
 <div  key={lang.id}  className=' p-2  '>
   <button className='bg-yellow-950 py-1 w-20 text-sm text-white  font-semibold'>{lang.content}</button>
</div>
))}
 </div>

    <UploadBox></UploadBox>

<div className='flex flex-col w-[5%] gap-y-2 rounded-xl absolute left-[27%] top-[45%] transform -translate-x-1/2 -translate-y-0'>
   <button className='bg-yellow-100  rounded-md py-1 px-6 text-sm text-black font-semibold'>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-up-icon lucide-file-up"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M12 12v6"/><path d="m15 15-3-3-3 3"/></svg>
   </button>
     <button className='bg-yellow-100  rounded-md py-1 px-6 text-sm text-black font-semibold'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder-up-icon lucide-folder-up"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/><path d="M12 10v6"/><path d="m9 13 3-3 3 3"/></svg>
     </button>
       <button className='bg-yellow-100 rounded-md py-1 px-6 text-sm text-black font-semibold'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volume-icon lucide-volume"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"/></svg>
       </button>

</div>


<div className='flex flex-col w-[5%] gap-y-2  absolute left-[70%] top-[45%]'>
   <button className='bg-yellow-100 rounded-md py-1 px-6 text-sm text-black font-semibold'>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-up-icon lucide-file-up"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M12 12v6"/><path d="m15 15-3-3-3 3"/></svg>
   </button>
     <button className='bg-yellow-100 rounded-md py-1 px-6 text-sm text-black font-semibold'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder-up-icon lucide-folder-up"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/><path d="M12 10v6"/><path d="m9 13 3-3 3 3"/></svg>
     </button>
       <button className='bg-yellow-100  rounded-md py-1 px-6 text-sm text-black font-semibold'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volume-icon lucide-volume"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"/></svg>
       </button>

</div>
        
        <p className=' absolute text-white text-center w-full bottom-0 text-sm text-shadow-sm text-shadow-orange-300'> &copy;
 2025 Vision Tech 360. All Rights Reserved</p>

    </div>
    
    </>
  )
}
