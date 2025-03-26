import { createContext, useReducer } from "react";

const CartContext = createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {}
});

function cartReducer(state, action){
    if (action.type === 'ADD_ITEM') {
        // update the state to add meal item
       
    }

    if (action.type === 'REMOVE_ITEM') {
        // remove an item from the state
    }

    return state;
}

export function CartContextProvider({children}){
    useReducer(cartReducer, { items: []})

    return <CartContext>{children}</CartContext>
}

export default CartContext;