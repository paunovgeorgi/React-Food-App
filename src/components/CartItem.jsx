import React, { useContext } from 'react'
import { currencyFormatter } from '../utils/formatting'

const CartItem = ({ name, quantity, price, onDecrease, onIncrease}) => {
  return (
    <li className="cart-item">
        <p>
            {name} - {quantity} x {currencyFormatter.format(price)}
        </p>
        <p className="cart-item-actions">
            <button onClick={onDecrease}>-</button>
            <span>{quantity}</span>
            <button onClick={onIncrease}>+</button>
        </p>
    </li>
  )
}

export default CartItem