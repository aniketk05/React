import React, { memo } from 'react'

const HocEx1Child = () => {
    console.log("Child")
  return (
    <div>
      
    </div>
  )
}

export default memo(HocEx1Child) //! This is important
