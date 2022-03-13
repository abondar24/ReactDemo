import '../stylesheets/Header.css';
import logo from '../images/react-logo.png'

function Header(){
  return (
    <header>
      <nav className="nav">
        <img src={logo} className="nav-logo"/>
        <h3 className="nav-heading">Welcome to React world</h3>
        <ul className="nav-items">
          <li className="nav-item-li">
            <a className="nav-link" href="https://reactjs.org/" target="_blank">React</a>
          </li>
          <li className="nav-item-li">
            <a className="nav-link" href="https://nodejs.org/en/" target="_blank">Node</a>
          </li>
          <li className="nav-item-li">
            <a className="nav-link" href="https://babeljs.io/" target="_blank">Babel</a>
          </li>
          <li className="nav-item-li">
            <a className="nav-link" href="https://webpack.js.org/" target="_blank">Webpack</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header
