import appLogo from '../assets/logo.jpg';
import Button from './UI/Button';

const Header = () => {
  return (
    <header id='main-header'>
        <div id='title'>
            <img src={appLogo} alt="restaurant logo" />
            <h1>Food Stop</h1>
        </div>
        <nav>
            <Button textOnly>
                Cart (0)
            </Button>
        </nav>
    </header>
  )
}

export default Header