import { configureStore } from "@reduxjs/toolkit";
import feedbackReducer from '@/app/reduxToolkit/slice'
import appReducer from '@/app/reduxToolkit/appSlice'
import chatReducer from '@/app/reduxToolkit/chatSlice'
import userReducer from '@/app/reduxToolkit/userSlice'

export const store = configureStore({
    reducer:{
        feedbacks: feedbackReducer,
        apps: appReducer,
        chat:chatReducer,
        users:userReducer
    }
})
if (typeof window !== 'undefined') {
  store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem('chatHistory', JSON.stringify(state.chat.chatHistory));
  });
}

