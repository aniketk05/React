import { createSlice } from "@reduxjs/toolkit";


let todoSlice=createSlice({
    name:"todo",
    initialState:{
        list:[]
    },
    reducers:{
        addTodo:(state,action)=>{
            state.list.push(action.payload)
        },
        deleteTodo:(state,action)=>{
            let newList=state.list.filter(val=>val.id!==action.payload)
            state.list=newList
        },
        updateTodo:(state,action)=>{
            let index=state.list.findIndex((val)=>val.id==action.payload.id)
            state.list[index]=action.payload
        }
    }
})

export default todoSlice