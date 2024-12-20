import React from 'react'

export default function JsxExpressionRule2() {
    let mode ="light";
    let api={}
    username='xyz'
    password='123'

  return (
    <div>

    <h1>Jsx Expression Rule 2</h1>
    <h1>
        {/* short circuit oprator allowed */}
        {/* short circuit && oparator. if first statement is true then only second statement will be checked  */}
        {/* short circuit || oparator. if first statement is true then second statement will not be checked   */}
        {/* {mode=='light' && 'it is light mode'} */}
        {/* Example short circuit */}
        {/* {Array.isArray(api) && api.map(val => console.log(val))} */}

        {/* {username=='xyz' && password=='123' && "welcome user " || "wrong credential"} */}

        
        {/* ternay oprator are allowed */}
        {/* {mode =='dark'? <p>☀️</p>:<p>🌙</p>} */}

        {/* if else condtional oparator not allowed  */}
        {/* {if(mode=='dark'){
            return <p>☀️</p>
        }else{
            <p>🌙</p>
        }} */}
        </h1>  
    </div>
  )
}
