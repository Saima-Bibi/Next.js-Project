import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchApps = createAsyncThunk('fetchApps', async () => {
 console.log('Thunk triggered') 
    const response = await axios.get('/api/feedback?type=getApps')

    console.log('response', response?.data?.appData)
     return response?.data?.appData
  
})
const appSlice = createSlice({

    name: 'apps',
    initialState: {
        data: [],
        loading: false,
        error: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchApps.pending, (state, action) => {
          
                state.loading = true
        }),
         builder.addCase(fetchApps.fulfilled, (state, action) => {
             state.loading = false
            state.data = action.payload 
           
        }),
            builder.addCase(fetchApps.rejected, (state, action)=>{
           state.error= true
           state.loading = false
        })
    }


})
export default appSlice.reducer
