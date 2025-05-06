import React from 'react'

//context
import { useContext } from 'react'
import CartContext from '../contextAPI/CartContext'

const Checkout = () => {
    const { cartItems } = useContext(CartContext);
  return (
    <div>
        <h1>Checkout</h1>
        <div>
            <h2>Your Order</h2>
            {cartItems.map((item) => (
                <div key={item.id}>
                    <p>{item.title}</p>
                    <p>${item.price}</p>
                </div>
            ))}
            
        </div>
    </div>
  )
}

export default Checkout