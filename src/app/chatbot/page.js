'use client'
import React,{useState} from 'react'
import Result from '@/components/Result'

export default function page() {

  const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY

  const[question,setQuestion] = useState('')
  const[result,setResult] =useState('')

  const payload = { 
    "contents": [{ 
      "parts": [{  "text": question }]
      }
    ]}

  const handleSubmit = async()=>{
    console.log('question',question)
    let response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
      {
        method:"POST",
        body:JSON.stringify(payload)

      }
    )
  response =  await response.json()
 let dataString = response.candidates[0].content.parts[0].text
 dataString = dataString.split('* ')
dataString = dataString.map((item)=> item.trim())


  console.log('response',dataString)
  setResult(dataString)
  }

  return (
    <>
      <div className="h-screen w-full flex flex-col items-center justify-end">
  <div className=' h-screen'>
    <p className='text-white text-xl p-6 '>Hello! How can I help you...</p>


      { result && <Result ans={result} />}
  



{/* <p className={`text-white text-sm h-[50%] ${result ? 'overflow-scroll' : ''}`}>{result}</p> */}
    
  </div>
    

  <div className='bg-[#393848] w-[70%] mb-6 rounded-sm flex flex-row items-end text-white px-1 py-2' >
    
  
      <input type="text" placeholder="  Type a message"  className='border-none input-md outline-none w-[96%]' value={question} onChange={(e)=>setQuestion(e.target.value)} />
   <button className="  px-1 border-none py-1 bg-[#393848] cursor-pointer" onClick={handleSubmit}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill={'white'}height={16} width={16}><path d="M568.4 37.7C578.2 34.2 589 36.7 596.4 44C603.8 51.3 606.2 62.2 602.7 72L424.7 568.9C419.7 582.8 406.6 592 391.9 592C377.7 592 364.9 583.4 359.6 570.3L295.4 412.3C290.9 401.3 292.9 388.7 300.6 379.7L395.1 267.3C400.2 261.2 399.8 252.3 394.2 246.7C388.6 241.1 379.6 240.7 373.6 245.8L261.2 340.1C252.1 347.7 239.6 349.7 228.6 345.3L70.1 280.8C57 275.5 48.4 262.7 48.4 248.5C48.4 233.8 57.6 220.7 71.5 215.7L568.4 37.7z"/></svg>
  </button>
  
  </div>
 
</div>
    </>
  )
}
