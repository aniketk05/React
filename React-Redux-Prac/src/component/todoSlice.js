import { createSlice } from "@reduxjs/toolkit";


let todoSlice=createSlice({
    name:"todo",
    initialState:{
        todoList:[]
    },
    reducers:{
        addTodo:(state,action)=>{
            console.log(action.payload)

        }
    }
})

export let {addTodo}=todoSlice.actions
export default todoSlice.reducer