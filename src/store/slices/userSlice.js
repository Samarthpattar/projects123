import { createSlice } from "@reduxjs/toolkit";



const initialState={
    name:"samarth",
    age:25,
    hobbies:["cricket","pubg"]
}


export const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        changeData: (state,action) =>{
            console.log("action",action.payload)
          state.name=action.payload.pname;
          state.age =action.payload.page;
          state.hobbies=action.payload.phobbies;
        },
    },
})

export const {changeData}=userSlice.actions

export default userSlice.reducer