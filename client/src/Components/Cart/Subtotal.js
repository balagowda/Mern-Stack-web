import React, { useEffect, useState } from 'react'
import './cart.css';

const Subtotal = ({item}) => {
 const [cost,setCost] = useState(0);

  function calculateCost() {
    let price = 0;
    item.map((item) => {
        price += item.cart.price.cost
    });
    setCost(price);
  }
  
  useEffect(()=>{
    calculateCost();
  },[item.length]);

  return (
    <div className='sub_total'>
      <h3>Subtotal ({item.length} item): <strong style={{fontWeight:"700",color:"#111"}}>₹{cost}.00</strong> </h3>
    </div>
  )
}

export default Subtotal;
