import '../stylesheet/Header.css';
import logo from '../image/react-logo.png'

function Header(){
  return (
    <header>
      <nav className="nav">
        <img src={logo} className="nav-logo"/>
        <ul className="nav-items">
          <li>React</li>
          <li>Node</li>
          <li>Babel</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header
