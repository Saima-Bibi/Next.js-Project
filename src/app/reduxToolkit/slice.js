import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFeedbacks = createAsyncThunk('fetchFeedbacks', async () => {

    const response = await axios.get('/api/feedback?type=getFeedbacks')

    console.log('response', response?.data?.feedbacks)
     return  response?.data?.feedbacks
  
})
const feedbackSlice = createSlice({

    name: 'feedbacks',
    initialState: {
        data: [],
        loading: false,
        error: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFeedbacks.pending, (state, action) => {
          
                state.loading = true
        }),
         builder.addCase(fetchFeedbacks.fulfilled, (state, action) => {
             state.loading = false
            state.data = action.payload 
           
        }),
            builder.addCase(fetchFeedbacks.rejected, (state, action)=>{
           state.error= true
           state.loading = false
        })
    }


})
export default feedbackSlice.reducer
