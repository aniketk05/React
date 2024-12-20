import React from 'react'
import PropsEx2Child from './PropsEx2Child'

export default function PropsEx2() {
  return (
    <div>
      <PropsEx2Child/>
      <PropsEx2Child><h1>Hello</h1></PropsEx2Child>
    </div>
  )
}
