import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import { localChatHistory } from '../utils/localStorage';
import axios from "axios";

export const fetchChats = createAsyncThunk('fetchChat', async (id) => {
 console.log('fetchChat triggered') 
    const response = await axios.get(`/api/chatbot/${id}?type=getConversations`)

    console.log('API response', response?.data)
     return response?.data?.conversations
  
})

const initialState = {
  messages: [],
  // chatHistory: localChatHistory(),
  chatHistory:[],
  chatTitle:null,
  activeChatId: null,
  loading: false,
  question: '',
  result: ''
}

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setMessages: (state, action) => { 
      state.messages.push(action.payload)
       
     },
    updateMessage:(state,action) =>{
      state.messages[state.messages.length -1] = action.payload
    },
    setChatTitle:(state,action)=>{
     state.chatTitle = action.payload
    },
     setResult:(state,action)=>{
     state.result = action.payload
    },
    handleNewChat:(state,action)=>{
      state.messages = []
      state.chatTitle = null
      state.activeChatId = null
  //    reducer(state,action){

  //     const isDuplicate = state.chatHistory.some(
  //   chat => JSON.stringify(chat.messages) === JSON.stringify(action.payload.messages)
  // );
  //    if(action.payload.messages.length > 0 && !isDuplicate){

  //    state.chatHistory.push(action.payload)
  //   }
  //    state.messages = []
  //    state.result = ''
  //    action.activeChatId = null
  //    },
  //    prepare(messages){
  //      const firstUserMessage = messages.find(m => m.type === 'chat-end')?.content || 'Prev Chat';
  //     return{
  //       payload:{
  //         id: Date.now(),
  //         title: firstUserMessage.length > 30 
  //       ? firstUserMessage.slice(0, 30) + '...' 
  //       : firstUserMessage,
  //         messages
  //       }
  //     }
  //    }
    },
    handleLoadChat:(state,action)=>{
     state.messages = []
    
    const chat = JSON.parse(JSON.stringify(state.chatHistory)).find(chat=> chat._id === action.payload)
    console.log('chat',chat)
    if(chat){
      state.messages.push(...chat?.messages)
      state.chatTitle = chat?.title
      state.activeChatId = chat._id
    }
    }
  
    
  },
   extraReducers: (builder) => {
          builder.addCase(fetchChats.pending, (state, action) => {
            
                  state.loading = true
          }),
           builder.addCase(fetchChats.fulfilled, (state, action) => {
               state.loading = false
              state.chatHistory = action.payload 
              // if(state.chatHistory.length === 1){
              //     state.messages = action.payload?.[0]?.messages
              //     state.activeChatId = action.payload?.[0]?._id
              //     state.chatTitle = action.payload?.[0]?.title
              // }
            
             
          }),
              builder.addCase(fetchChats.rejected, (state, action)=>{
             state.error= true
             state.loading = false
          })
      }
  
});

export const {
  // setmessages,
   updateMessage,  
setMessages, setChatTitle,  setResult, handleNewChat, handleLoadChat
} = chatSlice.actions;

export default chatSlice.reducer;