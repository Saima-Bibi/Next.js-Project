'use client'
import React,{useState,useEffect} from 'react'
import {handleNewChat, handleLoadChat} from '@/app/reduxToolkit/chatSlice'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'


export default function Layout({children}) {
  const {messages, chatHistory,activeChatId} = useSelector(state=> state.chat)
  const dispatch = useDispatch()
 
  console.log(chatHistory,'chatHistory from redux')

    const [selectedChatId, setSelectedChatId] = useState(null)

  useEffect(() => {
    if (selectedChatId) {
      dispatch(handleLoadChat(selectedChatId))
      setSelectedChatId(null) 
    }
  }, [selectedChatId, dispatch])

    const [startNewChat, setStartNewChat] = useState(false)

    useEffect(() => {
    if (startNewChat && messages.length > 0) {
      dispatch(handleNewChat(messages))
      setStartNewChat(false)
    }
  }, [startNewChat, messages, dispatch])


  return (
    <>
      <div className="drawer drawer-open bg-[#2F2F39]">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}

    
{children}


   
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-2"className="drawer-overlay"></label>
    <ul className="menu  text-white h-full w-70 p-4 bg-[#1D1E22]">
      {/* Sidebar content here */}
      <li className='hover:bg-[#2F2F39] rounded-sm hover:cursor-pointer'><Link href={'/chatbot'} onClick={()=> setStartNewChat(true)}>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill={'white'}height={18} width={18}><path d="M518.6 109.3L530.7 121.4C543.2 133.9 543.2 154.2 530.7 166.7L504 193.4L446.6 136L473.4 109.3C485.9 96.8 506.2 96.8 518.7 109.3zM253 329.6L424 158.7L481.4 216.1L310.4 387.1C306.2 391.3 300.8 394.3 295 395.7L229.4 410.8L244.5 345.2C245.8 339.4 248.8 334 253.1 329.8zM450.7 86.6L230.4 307C221.9 315.5 216 326.2 213.3 337.9L192.4 428.5C191.2 433.9 192.8 439.5 196.7 443.4C200.6 447.3 206.2 448.9 211.6 447.7L302.2 426.8C313.9 424.1 324.6 418.2 333.1 409.7L553.4 189.3C578.4 164.3 578.4 123.8 553.4 98.8L541.3 86.6C516.3 61.6 475.8 61.6 450.8 86.6zM144 128C99.8 128 64 163.8 64 208L64 496C64 540.2 99.8 576 144 576L432 576C476.2 576 512 540.2 512 496L512 368C512 359.2 504.8 352 496 352C487.2 352 480 359.2 480 368L480 496C480 522.5 458.5 544 432 544L144 544C117.5 544 96 522.5 96 496L96 208C96 181.5 117.5 160 144 160L272 160C280.8 160 288 152.8 288 144C288 135.2 280.8 128 272 128L144 128z"/></svg>
New Chat</Link>

</li>
      <li className=' text-sm rounded-sm hover:cursor-pointer'> <Link href={'/chatbot'}>Chat History</Link></li>

<ul>
      {chatHistory ? chatHistory.map((item)=>( 
          <li key={item.id}  className={`hover:bg-[#2F2F39]  ${activeChatId === item.id ? 'bg-[#2F2F39]': ''} rounded-sm hover:cursor-pointer`}><Link href={'/chatbot'} onClick={()=> setSelectedChatId(item.id)}> {item.messages?.[0]?.content || item.title  }</Link></li>
       )):('no chat found')}
     </ul>  
      


<li className=' absolute h-full flex flex-col bottom-2 justify-end'>
      <div className="avatar ">
  <div className="w-10 rounded-full">
    <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
  </div>
   <p className='text-white text-sm'>Saima Bibi</p>
</div>
</li>

    </ul>



  </div>
</div>
    </>
  )
}
