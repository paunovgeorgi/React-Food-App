import { createContext, useState } from "react";

const UserProgressContext = createContext({
    progress: '',
    showCart: () => {},
    hideCart: () => {},
    showCheckout: () => {},
    hideCheckout: () => {}
});

export function UserProgressContextProvider({ children }){

    const [userProgress, setUserProgress] = useState('');

    const showCart = () => setUserProgress('cart');
    const hideCart = () => setUserProgress('');
    const showCheckout = () => setUserProgress('checkout');
    const hideCheckout = () => setUserProgress('');

    const userProgressContext = {
        progress: userProgress,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout
    }

    return <UserProgressContext value={userProgressContext}>{children}</UserProgressContext>
}

export default UserProgressContext;