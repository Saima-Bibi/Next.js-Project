import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk('fetchUsers', async () => {
 console.log('Thunk triggered') 
    const response = await axios.get('/api/chatbot?type=getUsers')

    console.log('response', response?.data)
     return response?.data?.users
  
})
const userSlice = createSlice({

    name: 'users',
    initialState: {
        data: [],
        loading: false,
        error: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state, action) => {
          
                state.loading = true
        }),
         builder.addCase(fetchUsers.fulfilled, (state, action) => {
             state.loading = false
            state.data = action.payload 
           
        }),
            builder.addCase(fetchUsers.rejected, (state, action)=>{
           state.error= true
           state.loading = false
        })
    }


})
export default userSlice.reducer
