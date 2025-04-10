import { useContext } from 'react';
import appLogo from '../assets/logo.jpg';
import Button from './UI/Button';
import CartContext from '../store/CartContext';
import UserProgressContext from '../store/UserProgressContext';

const Header = () => {

  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalCartItems = cartCtx.items.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  function handleShowCart(){
    userProgressCtx.showCart();
  }

  return (
    <header id='main-header'>
        <div id='title'>
            <img src={appLogo} alt="restaurant logo" />
            <h1>Food Stop</h1>
        </div>
        <nav>
            <Button textOnly onClick={handleShowCart}>
                Cart ({totalCartItems})
            </Button>
        </nav>
    </header>
  )
}

export default Header