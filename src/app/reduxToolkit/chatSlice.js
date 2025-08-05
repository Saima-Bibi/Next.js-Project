import { createSlice } from '@reduxjs/toolkit';
import { localChatHistory } from '../utils/localStorage';

const initialState = {
  messages: [],
  chatHistory: localChatHistory(),
  activeChatId: null,
  loading: false,
  question: '',
  result: ''
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setmessages: (state, action) => { state.messages.push(action.payload) },
    updateMessage:(state,action) =>{
      state.messages[state.messages.length -1] = action.payload
    },
    setResult:(state,action)=>{
     state.result = action.payload
    },
    handleNewChat:{
     reducer(state,action){

      const isDuplicate = state.chatHistory.some(
    chat => JSON.stringify(chat.messages) === JSON.stringify(action.payload.messages)
  );
     if(action.payload.messages.length > 0 && !isDuplicate){

     state.chatHistory.push(action.payload)
    }
     state.messages = []
     state.result = ''
     action.activeChatId = null
     },
     prepare(messages){
       const firstUserMessage = messages.find(m => m.type === 'chat-end')?.content || 'Prev Chat';
      return{
        payload:{
          id: Date.now(),
          title: firstUserMessage.length > 30 
        ? firstUserMessage.slice(0, 30) + '...' 
        : firstUserMessage,
          messages
        }
      }
     }
    },
    handleLoadChat:(state,action)=>{
     state.messages = []
    const chat = JSON.parse(JSON.stringify(state.chatHistory)).find(chat=> chat.id === action.payload)
    console.log('chat',chat.messages)
    if(chat){
      state.messages.push(...chat.messages)
      state.activeChatId = chat.id
    }
    }
  
    
  }
});

export const {
  setmessages, updateMessage,  setResult, handleNewChat, handleLoadChat
} = chatSlice.actions;

export default chatSlice.reducer;