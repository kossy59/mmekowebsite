import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { URL } from "../../../api/config"
import axios from "axios";

const initialState = {
    likestatus:'idle',
    error:null
}

export const postlike = createAsyncThunk("like/postlike",async data=>{
   
    try{
     
        //console.log('ontop get profile')
        let response = await axios.put(`${URL}/like`,data)
       // console.log('under get profile')
       

        return response.data

        
    }catch(err){
       // console.log('erro get profile')
        throw(err.response.data.message)
        
       
    }


})



const like = createSlice({
    name:"like",
    initialState,
    reducers:{
        chagelikestatus(state,action){
            state.likestatus = action.payload
            
        }
    },
    extraReducers(builder){

        builder.addCase(postlike.pending,(state,action)=>{
            state.likestatus = 'loading'
            
        }
        )
        .addCase(postlike.fulfilled,(state,action)=>{

            state.likestatus = 'succeeded'
          
           
        }

        )
        .addCase(postlike.rejected,(state,action)=>{
           
            state.likestatus = 'failed'
           
            if(!action.error.message){
                state.error = "Check internet connection"
            }else{
                state.error = action.error.message
            }
        }

        )
    }
})

export default like.reducer;
export const {chagelikestatus} = like.actions;