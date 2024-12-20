import React from 'react'

export default function Card(props) {
    console.log(props.data.map(e=>e))
    let img=props.data.map(e=>e.img)
    
  return (
    <>
        {props.data.map((e,i)=>{
            return(
                <div id='card' key={e.id}>
                    <div id='CardImg'>
                <img src={e.images[0]} height="150px"></img>
                    </div>
                    <section id='CardDesc'>
                        <span id='ProdBrand'>{e.brand} </span><span id='ProdName'>{e.tags[1]}</span>
                        <p id='ProdPrice'><strong>Price :</strong> $ {e.price}</p>
                         <p id='ProdDesc'><strong>Description :</strong>  <em>{e.title}</em></p>
                         <p id='ProdWaran'><strong>Warantity :</strong>  {e.warrantyInformation}</p>
                    </section>
                    
                </div>
            )
        })}  
    </>
  )
}
