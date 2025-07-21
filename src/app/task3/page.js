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
        <div className=''>
           

        {/* Circle */}  
     <div className="absolute inset-0 flex items-center justify-center">
  <div className="h-125 w-125 mt-8 rounded-full bg-amber-500 opacity-50 border-4 border-red-700">
    
  </div>
   <p className='  py-1 px-18 text-black  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-6 '>Select Target Language</p>

{languages.map((lang)=>(
   <div key={lang.id}>
   <button className='bg-yellow-950 py-1 px-8 text-white  absolute'>{lang.content}</button>
</div>
))}

    <button className=' bg-cyan-400 py-1 px-18 text-white rounded-3xl absolute bottom-24 sm:botton-8'>Translate Now</button>
</div>


    <UploadBox></UploadBox>

 </div>
        
        <p className=' absolute text-white text-center w-full bottom-0 text-sm text-shadow-sm text-shadow-orange-300'> &copy;
 2025 Vision Tech 360. All Rights Reserved</p>

    </div>
    
    </>
  )
}
