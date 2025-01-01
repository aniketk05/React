import React, { useEffect, useState } from 'react'

const UseEffectEx5 = () => {
    const [cartItem,setCartItem]=useState(0)
    const [total,setTotal]=useState(1000)

    useEffect(()=>{
        setTotal(total+100)
        console.log("The total in cart")
    },[cartItem])
    useEffect(()=>{
        console.log("we are checking your eligibility for delevery ")
    },[total])
  return (
    <div>
        <h1>cart items : {cartItem}</h1>
        <h1>total : {total}</h1>
        <button className='bg-blue-500 rounded-md px-2 text-white' onClick={()=>{
            setCartItem(cartItem+1)
        }}>
            add to Cart
        </button>
      
    </div>
  )
}

export default UseEffectEx5
