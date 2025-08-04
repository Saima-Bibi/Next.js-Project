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
     if(action.payload.messages.length > 0 ){
     state.chatHistory.push(action.payload)}
     state.messages = []
     state.result = ''
     action.activeChatId = null
     },
     prepare(messages){
      return{
        payload:{
          id: Date.now(),
          messages
        }
      }
     }
    }
  
    
  }
});

export const {
  setmessages, updateMessage,  setResult, handleNewChat
} = chatSlice.actions;

export default chatSlice.reducer;