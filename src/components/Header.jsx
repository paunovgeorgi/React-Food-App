import { useContext } from 'react';
import appLogo from '../assets/logo.jpg';
import Button from './UI/Button';
import CartContext from '../store/CartContext';

const Header = () => {

  const cartCtx = useContext(CartContext);

  const totalCartItems = cartCtx.items.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  return (
    <header id='main-header'>
        <div id='title'>
            <img src={appLogo} alt="restaurant logo" />
            <h1>Food Stop</h1>
        </div>
        <nav>
            <Button textOnly>
                Cart ({totalCartItems})
            </Button>
        </nav>
    </header>
  )
}

export default Header