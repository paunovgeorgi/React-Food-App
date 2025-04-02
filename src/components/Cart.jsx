import React, { useContext } from 'react'
import Modal from './UI/Modal'
import CartContext from '../store/CartContext'
import { currencyFormatter } from '../utils/formatting';
import Button from './UI/Button';
import UserProgressContext from '../store/UserProgressContext';
import CartItem from './CartItem';
import calculatePrice from '../utils/calculatePrice';

const Cart = () => {

  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
    
  const totalPrice = calculatePrice(cartCtx.items);

 function handleCloseCart(){
    userProgressCtx.hideCart();
 }

 function handleShowCheckout(){
  userProgressCtx.showCheckout();
 }

  return (
    <Modal className='cart' open={userProgressCtx.progress === 'cart'} onClose={userProgressCtx.progress === 'cart' ? handleCloseCart : null}>
        <h2>Your Cart</h2>
        <ul>
            {cartCtx.items.map((item) => (
                <CartItem key={item.id} {...item} onDecrease={() => cartCtx.removeItem(item.id)} onIncrease={() => cartCtx.addItem(item)}/>
            ))}
        </ul>
        <p className='cart-total'>{currencyFormatter.format(totalPrice)}</p>
        <p className="modal-actions">
            <Button textOnly onClick={handleCloseCart}>Close</Button>
            {cartCtx.items.length > 0 && <Button onClick={handleShowCheckout}>Go to Checkout</Button>}
        </p>
    </Modal>
  )
}

export default Cart