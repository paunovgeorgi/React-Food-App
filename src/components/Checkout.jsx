import React, { useContext } from 'react'
import Modal from './UI/Modal'
import CartContext from '../store/CartContext'
import calculatePrice from '../utils/calculatePrice';
import { currencyFormatter } from '../utils/formatting';
import Input from './UI/Input';
import Button from './UI/Button';
import UserProgressContext from '../store/UserProgressContext';

const Checkout = () => {

    const cartCtx = useContext(CartContext);
    const totalPrice = calculatePrice(cartCtx.items);
    const userProgressCtx = useContext(UserProgressContext);

    function handleCloseCheckout(){
        userProgressCtx.hideCheckout();
    }

    function handleSubmit(e){
        e.preventDefault();

        const fd = new FormData(e.target);
        const customerData = Object.fromEntries(fd.entries());

        const data = {
            order: {
                items: cartCtx.items,
                customer: customerData
            }       
        }
  
        fetch('http://localhost:3000/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

    }

  return (
    <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleCloseCheckout}>
        <form onSubmit={handleSubmit}>
            <h2>Checkout</h2>
            <p>Total Amount: {currencyFormatter.format(totalPrice)}</p>
            <Input label="Full Name" type="text" id="name" />
            <Input label="Email Address" type="text" id="email" />
            <Input label="Street" type="text" id="street" />
            <div className="control-row">
                <Input label="Postal Code" type="text" id="postal-code"/>
                <Input label="City" type="text" id="city"/>
            </div>
            <p className="modal-actions">
                <Button type="button" textOnly onClick={handleCloseCheckout}>Close</Button>
                <Button>Submit Order</Button>
            </p>
        </form>
    </Modal>
  )
}

export default Checkout