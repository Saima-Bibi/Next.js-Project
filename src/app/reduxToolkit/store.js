import { configureStore } from "@reduxjs/toolkit";
import feedbackReducer from '@/app/reduxToolkit/slice'

export const store = configureStore({
    reducer:{
        feedbacks: feedbackReducer
    }
})
