import React from 'react'

export default function Result({ans,ques}) {
    console.log('ans', ans)
  return (
    <> {Array.isArray(ans) &&
        ans
        .filter(item => item.content && item.content.trim() !== '')
        .map((item, index) => (
          <div className='max-h-[200px] w-[100%] overflow-y-auto' key={index}>
            <div className={`chat  ${item.type}`}>
              <div className='chat-bubble max-w-[500px] text-white text-xs text-justify bg-[#1D1E22] whitespace-pre-wrap leading-relaxed p-2'>
                {item.content}
              </div>
            </div>
          </div>
        ))}
 {/* <p className={`text-white text-sm h-[50%] ${ans ? 'overflow-scroll' : ''}`}>{ans}</p> */}
      
    </>
  )
}
