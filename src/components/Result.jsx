import React,{useRef,useEffect} from 'react'
import ReactMarkdown from 'react-markdown'

export default function Result({ ans}) {
  console.log('ans', ans)

   const endRef = useRef(null);

  useEffect(() => {
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [ans]);

  return (
    <> {Array.isArray(ans) &&
      ans
        .map((item, index) => (

          <div className=' w-[100%] ' key={index}>
            <div className={`chat   ${item.sender === 'user' ? 'chat-end':'chat-start'}`}>
              <div className='chat-bubble max-w-[500px] text-white text-sm text-justify bg-[#1D1E22] whitespace-pre-wrap leading-relaxed '>
                {item.loading  && item.loading === true ? (
                  <span className="loading loading-dots loading-sm text-center text-white"></span>
                ) : (
                  <ReactMarkdown>{item.content}</ReactMarkdown>
                )}              </div>
            </div>
              {index === ans.length - 1 && <div ref={endRef} />}
          </div>
        ))}


    </>
  )
}
