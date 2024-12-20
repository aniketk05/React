import React from 'react'

export default function JsxRule3() {

    //! while writing jsx each and every jsx element must be closed
  return (
    <div>
      JsxRule 3 
      <p>while writing jsx each and every jsx element must be closed</p>
      <div>
        <hr />
        <br />
        <img src="" alt="" />
        <input type="text" />
      </div>
    </div>
  )

//! this will not work because we are not closing the jsx
//   return (
//     <div>
//       JsxRule 3 
//       <div>
//         <hr >
//         <br >
//         <img src="" alt="" >
//         <input type="text" >
//       </div>
//     </div>
//   )
}
