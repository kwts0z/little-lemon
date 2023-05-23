import logo from './Assets/Logo.svg'
import Navbar from './Nav.js';

function Header(){
  return(
    <header>
      <img src={logo} alt='Little Lemon Logo'></img>
      <Navbar/>
    </header>
  );
}

export default Header;