import React from 'react'

const Task29 = () => {
    const products=[
        {
            name:"Cleats",
            price:3000
        },
        {
            name:"Football",
            price:1000
        },
        {
            name:"Cones",
            price:500
        }
    ]
    return (
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              {product.name}: ${product.price}
            </li>
          ))}
        </ul>
      );
}

export default Task29
