import React, { useEffect, useState } from 'react'
import axios from 'axios'

const LoginForm = () => {

    let API="http://116.75.62.44:8000/auth"

    const [state,setState]=useState([])
    const UserData=async()=>{
        try {
            const res=await axios.get(API)
            setState(res.data)
        } catch (error) {
            console.log(error)
        }

    }
    useEffect(()=>{
        UserData()
    },[])
    console.log(state)

  return (
    <div style={{"height":"100vh"}}>
    </div>
  )
}

export default LoginForm
