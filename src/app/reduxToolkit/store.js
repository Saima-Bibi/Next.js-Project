import { configureStore } from "@reduxjs/toolkit";
import feedbackReducer from '@/app/reduxToolkit/slice'
import appReducer from '@/app/reduxToolkit/appSlice'

export const store = configureStore({
    reducer:{
        feedbacks: feedbackReducer,
        apps: appReducer
    }
})
