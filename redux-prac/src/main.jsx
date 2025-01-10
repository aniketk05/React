import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { configureStore, createSlice } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

let company=createSlice({
  name:"pk company",
  initialState:{
    amount:0
  },
  reducers:{
    paiseDedo:(wallet,kyaMila)=>{
      console.log(wallet)
      console.log(kyaMila.payload)
      wallet.amount+=kyaMila.payload
    },
  }
})
export let {paiseDedo} =company.actions
let store=configureStore({
  reducer:{
    pkReducer:company.reducer
  }
})

createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <App />
  </Provider>
  
)
