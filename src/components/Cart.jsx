import React, { useContext } from 'react'
import Modal from './UI/Modal'
import CartContext from '../store/CartContext'
import { currencyFormatter } from '../utils/formatting';
import Button from './UI/Button';
import UserProgressContext from '../store/UserProgressContext';
import CartItem from './CartItem';

const Cart = () => {

  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
    
  const totalPrice = cartCtx.items.reduce((acc, item) => {
    return acc + (item.quantity * item.price);
  }, 0)

 function handleCloseCart(){
    userProgressCtx.hideCart();
 }

  return (
    <Modal className='cart' open={userProgressCtx.progress === 'cart'}>
        <h2>Your Cart</h2>
        <ul>
            {cartCtx.items.map((item) => (
                <CartItem key={item.id} {...item} onDecrease={() => cartCtx.removeItem(item.id)} onIncrease={() => cartCtx.addItem(item)}/>
            ))}
        </ul>
        <p className='cart-total'>{currencyFormatter.format(totalPrice)}</p>
        <p className="modal-actions">
            <Button textOnly onClick={handleCloseCart}>Close</Button>
            <Button >Go to Checkout</Button>
        </p>
    </Modal>
  )
}

export default Cart