import React from 'react'

export default function JsxRule2() {
    
        //! more than one element should wrap into single parent element. at a time only one  
    
        //! I will work beacause we are returning more than one element with one parent div element
  return (
    <div>
      Jsx Rule 2
      <p>
      more than one element should wrap into single parent element. at a time only one
      </p>
    </div>
  )

  //! it will not work because return 2 element without parent element
//   return (
//     <div>   
//     </div>
//     <div>
//     </div>
//   )
}
