import React, { useContext } from 'react'
import Modal from './UI/Modal'
import CartContext from '../store/CartContext'
import calculatePrice from '../utils/calculatePrice';
import { currencyFormatter } from '../utils/formatting';
import Input from './UI/Input';
import Button from './UI/Button';
import UserProgressContext from '../store/UserProgressContext';
import useHttp from '../hooks/useHttp';
import Error from './Error';
import { useActionState } from 'react';

const requestConfig = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json '
    }
}

const BASE_URL = 'http://localhost:3000/orders'

const Checkout = () => {  

    const cartCtx = useContext(CartContext);
    const totalPrice = calculatePrice(cartCtx.items);
    const userProgressCtx = useContext(UserProgressContext);
    const {data, error, sendRequest, clearData} = useHttp(BASE_URL, requestConfig);

    function handleCloseCheckout(){
        userProgressCtx.hideCheckout();
    }

    function handleFinish(){
        userProgressCtx.hideCheckout();
        cartCtx.clearCart()
        clearData();
    }

    async function checkoutAction(prevState, fd){
   
        const customerData = Object.fromEntries(fd.entries());

        const bodyData = {
            order: {
                items: cartCtx.items,
                customer: customerData
            }       
        }

        await sendRequest(JSON.stringify(bodyData));
  
        // fetch('http://localhost:3000/orders', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // });
    }

    const [formState, formAction, isSending] = useActionState(checkoutAction, null);

    let actions = (
        <>
            <Button type="button" textOnly onClick={handleCloseCheckout}>Close</Button>
            <Button>Submit Order</Button>
        </>
    )

    if (isSending) {
        actions = <span>Sending order data...</span>
    }

    if (data && !error) {
        return <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleFinish}> 
            <h2>Success!</h2>
            <p>Your order was submitted successfully.</p>
            <p>We'll get back to you with more details via email within the next few minutes.</p>
            <p className="modal-actions">
                <Button onClick={handleFinish}>Okay</Button>
            </p>
        </Modal>
    }

  return (
    <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleCloseCheckout}>
        <form action={formAction}>
            <h2>Checkout</h2>
            <p>Total Amount: {currencyFormatter.format(totalPrice)}</p>
            <Input label="Full Name" type="text" id="name" />
            <Input label="Email Address" type="text" id="email" />
            <Input label="Street" type="text" id="street" />
            <div className="control-row">
                <Input label="Postal Code" type="text" id="postal-code"/>
                <Input label="City" type="text" id="city"/>
            </div>
            {error && <Error title='Failed to submit order.' message={order}/>}

            <p className="modal-actions">{actions}</p>
        </form>
    </Modal>
  )
}

export default Checkout