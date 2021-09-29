import React from 'react';
import './cart.css'
const Cart = (props) => {
    const {name,salary}=props.selectedDev
    return (
        <div className ="mt-1 cartlist">
  
      <div >
       <p>{name}, </p>
       <p>${salary}</p>
     
       </div>
    
    </div>
    );
};

export default Cart;



