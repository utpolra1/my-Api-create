import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SingleProduct from './SingleProduct';

function App() {
  const [product, setProduct]=useState([]);
  const [card, setCard]=useState([]);

  useEffect(() =>{
    fetch("./fakeData.json")
    .then(res=>res.json())
    .then(data=>{
      setProduct(data)
    })
  },[])

  const handleClick=(p)=>{
    const isExist=card.find(item=>item.id==p.id);
    if(!isExist){
      setCard([...card, p]);
    }
    else{
      alert("This card all ready exit")
    }
  }
  return (
    <>
      <div className='main-container'>
        <div className='left-service-container'>
          <div className='cards'>
            {product.map(pd=><SingleProduct product={pd} handleClick={handleClick}></SingleProduct>)}
          </div>
        </div>

      </div>
      <div className="cart-container">
          <div className="cart">
            <h3>Total Added product 0</h3>
            <div className="cart-items">
              <h5>Name</h5>
              <h5>Price</h5>
            </div>
            <div className='card-items'>
              {
                card.map(item=>(
                  <div className='card-items'>
                    <h5>{item.title.slice(0,10)}</h5>
                    <h5>{item.price}</h5>
                  </div>
                ))
              }
            </div>
          </div>
      </div>
    </>
  )
}

export default App
