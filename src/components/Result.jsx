import React from 'react'
import ReactMarkdown from 'react-markdown'

export default function Result({ ans }) {
  console.log('ans', ans)
  return (
    <> {Array.isArray(ans) &&
      ans
        .map((item, index) => (

          <div className=' w-[100%] ' key={index}>
            <div className={`chat  ${item.type}`}>
              <div className='chat-bubble max-w-[500px] text-white text-sm text-justify bg-[#1D1E22] whitespace-pre-wrap leading-relaxed '>
                {item.loading === true ? (
                  <span className="loading loading-dots loading-sm text-center text-white"></span>
                ) : (
                  <ReactMarkdown>{item.content}</ReactMarkdown>
                )}              </div>
            </div>
          </div>
        ))}


    </>
  )
}
