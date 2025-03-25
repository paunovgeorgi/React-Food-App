import appLogo from '../assets/logo.jpg';

const Header = () => {
  return (
    <header id='main-header'>
        <div id='title'>
            <img src={appLogo} alt="restaurant logo" />
            <h1>Food Stop</h1>
        </div>
        <nav>
            <button>Cart (0)</button>
        </nav>
    </header>
  )
}

export default Header