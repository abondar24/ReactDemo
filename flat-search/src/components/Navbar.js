import logo from '../images/flat-search.png'
import '../stylesheets/Navbar.css';

function Navbar(){
  return (
     <nav>
        <img src={logo} className="nav-logo"/>
     </nav>
   )
}

export default Navbar
