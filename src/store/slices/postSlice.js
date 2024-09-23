import { createSlice } from "@reduxjs/toolkit"



const initialState={
    id:0,
    title:"",
    body:""
}


export const postSlice=createSlice({
    name:"post",
    initialState,
    reducers:{

    }
})


export default postSlice.reducer