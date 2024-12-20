import React from 'react'
import PropsEx1Child from './PropsEx1Child'

// whenever parent don't send data and child is expecting a data that time child will create default prop
export default function PropsEx1() {
    let car="BMW"
  return (
    <div>
      <PropsEx1Child car={car}/>
    </div>
  )
}
