import { configureStore } from "@reduxjs/toolkit";
import feedbackReducer from '@/app/reduxToolkit/slice'
import appReducer from '@/app/reduxToolkit/appSlice'
import chatReducer from '@/app/reduxToolkit/chatSlice'

export const store = configureStore({
    reducer:{
        feedbacks: feedbackReducer,
        apps: appReducer,
        chat:chatReducer
    }
})
if (typeof window !== 'undefined') {
  store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem('chatHistory', JSON.stringify(state.chat.chatHistory));
  });
}

