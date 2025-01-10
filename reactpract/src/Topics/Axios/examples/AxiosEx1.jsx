import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'


const AxiosEx1 = () => {
    let [state,setState]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typecode.com/todos').then(val=>setState(val.data))
    },[])

  return (
    <div>
      Axios 
    </div>
  )
}

export default AxiosEx1
