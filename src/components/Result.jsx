import React from 'react'

export default function Result({ans}) {
    console.log('ans', ans)
  return (
    <>
      <div className={`chat chat-start h-[30%] w-[40%] ${ans ? 'overflow-scroll' : ''}`}>
  <div className={`chat-bubble text-white text-sm  text-left bg-black `}>{ans}</div>
</div>
 {/* <p className={`text-white text-sm h-[50%] ${ans ? 'overflow-scroll' : ''}`}>{ans}</p> */}
      
    </>
  )
}
