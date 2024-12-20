import React from 'react'


export default function JsxRule5() {
    //! React Fragment - fragment are nothing but empty angular braces (<></>) react fragment are use to avoid the extra node 
  return (
    <div>
      <h1>Fragment</h1>   
      <p>React Fragment - fragment are nothing but empty angular braces.  react fragment are use to avoid the extra node </p>
    </div>
  )

  //! we can write fragment in 3 ways 

  //? 1st way is 
//   return (
//     <>
//       <h1>Fragment</h1>   
//     </>
//   )
  //? 2nd way is 
//   return (
//     <React.Fragment>
//       <h1>Fragment</h1>   
//     </React.Fragment>
//   )
  //? 3rd way is by destructuring from react library
  //? like ----- import { Fragment } from 'react'
  //   return (
//     <Fragment>
//       <h1>Fragment</h1>   
//     </Fragment>
//   )



}
