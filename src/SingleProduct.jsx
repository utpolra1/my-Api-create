import React, { Component } from 'react'

const SingleProduct=({product,handleClick})=>{
    console.log(product);
    return (
        <div className='container'>
            <img className='imag-container' src={product.image}></img>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <h1>Price: ${product.price}</h1>
            <button onClick={(e)=>handleClick(product)}>Buy Now</button>
        </div>
      )
}

export default SingleProduct