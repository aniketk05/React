import React from 'react'
import Cart from './Cart'

export default function Header(Props) {
  return (
    <div>
      <Cart data={Props.name}/>
    </div>
  )
}
