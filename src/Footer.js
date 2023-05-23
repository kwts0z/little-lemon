import logo from './Assets/footer-logo.png'

function Footer(){
  return(
    <footer>
      <img src={logo} alt='Little Lemon Logo'></img>
      <h1>Doormat Navigation</h1>
      <ul>
        <li>
          <a href='/#'>Home</a>
        </li>
        <li>
          <a href='/About'>About</a>
        </li>
        <li>
          <a href='/Menu'>Menu</a>
        </li>
        <li>
          <a href='/Reservation'>Reservation</a>
        </li>
        <li>
          <a href='/Order-Online'>Order Online</a>
        </li>
        <li>
          <a href='/Login'>Login</a>
        </li>
      </ul>

      <h1>Contact</h1>
      <ul>
          <li>
            <p>Admins</p>
          </li>
          <li>
            <p>+30 6932423455</p>
          </li>
          <li>
            <p>littlelemon@hotmail.com</p>
          </li>
      </ul>

      <h1>Social Media Links</h1>
      <ul>
          <li>
            <p>Facebook</p>
          </li>
          <li>
            <p>Instagram</p>
          </li>
          <li>
            <p>TikTok</p>
          </li>
      </ul>

    </footer>
  );
}

export default Footer;